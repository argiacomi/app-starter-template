import expressLoader from './loaders/expressLoader';
import { srvPort } from '../common/constants';

const startServer = async () => {
  expressLoader.listen(srvPort, () => {
    console.log(`🚀 Server ready at http://localhost:${srvPort}`);
  });
};

startServer();
