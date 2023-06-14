<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require_once('model/model.php');
class controller extends model{
    public function __construct(){
        parent::__construct();
        
        if (isset($_SERVER['PATH_INFO'])) {
            switch ($_SERVER['PATH_INFO']) {
                case '/login_get_method':
                    $loginData = $this->logindata($_REQUEST['username'],$_REQUEST['password']);
                    echo json_encode($loginData);
                    break;
                
                case '/registration_api':
                    $data = json_decode(file_get_contents('php://input'), true);
                 
                    
                    $registData = $this->insert('users',$data['allData']);
                    
                    echo json_encode($registData);
                    // echo json_encode($registData);
                    break;
               
                case '/getallusers':
                    $Data = $this->select('users');
                    echo json_encode($Data['Data']);
                    break;
                case '/emailvalidationalready':
                    $Data = $this->select('users',array('email'=>$_REQUEST['email']));
                    echo json_encode($Data['Data']);
                    break;
                
                default:
                    echo "<br><h1>404 Page not found</h1>";
                    # code...
                    break;
                }
            }else{
            echo "<br><h1>404 Page not found</h1>";
            // header("location:home");
        }
    }
}
$controllerObj = new controller; 

?>