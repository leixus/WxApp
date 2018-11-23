/**
 * Created by 1039128168 on 2018/3/23.
 */
/**获取URL参数**/
function parseUrl(search){
    var dataStr = (search.split('?')[1]+"&").replace(/\?*(.+?)=(.+?)&/g, '"$1":"$2",')
    try{
        return JSON.parse("{" + dataStr.substr(0, dataStr.length - 1) + "}")
    }catch(e){
        return false
    }
}