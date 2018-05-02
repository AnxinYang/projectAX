/**
 * Created by Anxin Yang on 5/1/2018.
 */
import $ from "jquery";
const WebPort = {
    send(request){
        let url = request.url;
        let contentType = request.contentType || 'application/json; charset=utf-8';
        let type = request.type || 'GET';
        let success = request.success;
        let fail = request.fail;
        let dataType = request.dataType || 'json';
        let before = request.before;

        execute(before);

        $.ajax({
            url:url,
            type: type,
            contentType: contentType,
            dataType:dataType,
            success: function(res){
                execute(success,res);
            },
            fail: function (res) {
                execute(fail,res);
            }
        });
    }
};
window.wp = WebPort;

export default WebPort;
