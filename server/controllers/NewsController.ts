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
     */
    this.router.get('/',
      query('pageSize')
        .optional({checkFalsy: true})
        .isInt({ min: 1 }),
      query('page')
        .optional({checkFalsy: true})
        .isInt({ min: 1 }),
      async (req: express.Request, res: express.Response, next) => {
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
        let pageSize = config.get('newsapiMaxPageSize')
        let page = req.query['page'] || 1

        if (req.query['pageSize']) {
          pageSize = Math.min(pageSize, Number(req.query['pageSize']))
        }

        try {
          const response = await newsapi.v2.everything({
            q: 'bitcoin', // Just for testing
            searchIn: 'title,description',
            language: 'en',
            sortBy: 'publishedAt',
            pageSize,
            page,
          })
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
    );
  }
}

export default NewsController
