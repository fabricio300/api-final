'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')


Route.put('/api/pizzas/:id', 'PizzasnController.update')
Route.delete('/api/pizzas/:id', 'PizzasnController.destroy')
Route.post('/api/pizzas', 'PizzasnController.store')
Route.get('/api/pizzas', 'PizzasnController.index') 
Route.get('/api/pizzas/:id', 'PizzasnController.show') 


Route.get('/api/pagos', 'AdminController.index') 
Route.post('/api/pagos', 'AdminController.store')
Route.get('/api/pagos/:id', 'AdminController.show') 
Route.post('/api/pay', 'AdminController.payx')
Route.put('/api/pagos/:id', 'AdminController.update') 