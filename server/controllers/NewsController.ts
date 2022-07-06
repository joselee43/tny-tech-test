import * as express from 'express';
import { query, body, validationResult } from 'express-validator';
import * as NewsAPI from 'newsapi';

import config from '../config';

const newsapi = new NewsAPI(config.get('newsapiKey'));

class NewsController {
  router: express.Router = null;

  constructor () {
    this.router = express.Router();
    this.configure();
  }

  configure () {
    /**
     * GET: get news list
     * 
     * Query params:
     *  c: category                 (String)
     *  q: search query             (String)
     *  pageSize: page size         (Number)
     *  page: page number to fetch  (Number)
     */
    this.router.get('/',
      query('c')
        .optional({checkFalsy: true})
        .isString(),
      query('q')
        .optional({checkFalsy: true})
        .isString(),
      query('pageSize')
        .optional({checkFalsy: true})
        .isInt({ min: 1 }),
      query('page')
        .optional({checkFalsy: true})
        .isInt({ min: 1 }),
      this.getNewsList.bind(this)
    );
  }

  async getNewsList (req: express.Request, res: express.Response, next) {
    let status = 'error';
    let error = null;

    // Validate request payload
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      error = 'Invalid request payload'
      return res.status(400).json({
        status,
        error
      })
    }

    // API query values
    let c = req.query['c'] || ''
    let q = req.query['q'] || ''
    let pageSize = config.get('newsapiMaxPageSize')
    let page = req.query['page'] || 1

    if (req.query['pageSize']) {
      pageSize = Math.min(pageSize, Number(req.query['pageSize']))
    }

    try {
      let apiFunc: Function = null
      let payload = {
        q,
        searchIn: 'title,description',
        language: 'en',
        sortBy: 'publishedAt',
        pageSize,
        page,
      }

      if (c) {
        payload['category'] = c
        apiFunc = newsapi.v2.topHeadlines
      } else {
        if (!q) {
          payload['q'] = 'bitcoin'
        }
        apiFunc = newsapi.v2.everything
      }
      const response = await apiFunc(payload)
      status = 'ok';
      const { totalResults, articles } = response;
      return res.json({
        status,
        totalResults,
        articles
      })
    } catch (e) {
      console.log(e)
      return next(e)
    }
  }
}

export default NewsController
