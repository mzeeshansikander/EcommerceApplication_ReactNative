import {Router} from 'express';
import {create} from './customer.controller';
import {customerAuth} from './customer'

const routes = Router();
routes.post('/',create);
routes.get('/hello',customerAuth,(req,res)=>{
    res.send("Hello "+req.user.firstName);
});

export default routes
