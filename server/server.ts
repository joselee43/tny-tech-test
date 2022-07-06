import * as express from 'express';
import * as logger from 'morgan';
import * as cors from 'cors';
import * as path from 'path';
import NewsController from './controllers/NewsController';

class Server {
  app: express.Express = null;

  constructor() {
    this.configureServer();
  }

  configureServer() {
    this.app = express();

    this.app.use(cors());
    this.app.use(logger('dev'))
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.static(path.join(__dirname, '../public')))

    this.configureControllers();

    this.app.get('*', async (req: express.Request, res: express.Response) => {
      res.sendFile(path.join(__dirname, '../public/index.html'))
    })

    // error handler
    this.app.use(function (err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message
      res.locals.error = req.app.get('env') === 'development' ? err : {}

      // render the error page
      res.status(err.status || 500)
      res.send({
        error: err.toString()
      })
    })
  }

  configureControllers() {
    const apiRouter: express.Router = express.Router()

    apiRouter.use('/news', new NewsController().router)

    this.app.use('/api', apiRouter)
  }
}

export default Server;