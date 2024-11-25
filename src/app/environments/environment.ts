import { ServicoPrestado } from "../shared/model/servicoPrestado";

export const environment = {
    apiURLBase: 'http://localhost:8080',
    cliente: 'http://localhost:8080/api/clientes',
    servicoPrestado: 'http://localhost:8080/api/servicos-prestados',
    clientId: 'my-angular-app',
    clientSecret: '@321',
    obterTokenUrl: '/oauth/token'
}
