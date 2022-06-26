
class HomeController{ 
     index(require, response){
        response.json({MSG: "OLÁ MUNDO, FUNCIONOU"})
    }
}

export default new HomeController();