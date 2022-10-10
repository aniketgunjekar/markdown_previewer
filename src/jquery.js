//import jquery
import $ from "jquery"
window.jQuery = $

//dynamic CSS algorithm
const editprev_edit = "editprev_edit"; //MODIFY THIS
const editprev_prev = "editprev_prev"; //MODIFY THIS

$(document).ready(function() {
    //initial css
    console.log("document.ready() invoked");
    $("#background").addClass("background");    //MODIFY THIS
    $("#editor-window").addClass(editprev_edit);
    $("#previewer-window").addClass(editprev_prev);
    $(".title-bar").addClass("d-flex justify-content-between align-items-center");  //MODIFY THIS
    $("#editorbutton").text("[]");
    $("#previewerbutton").text('[]');

    //showEditor function
    let windowStatus = "editprev";
    $("#editorbutton").click(function() {
        console.log("showEditor() invoked");
        if(windowStatus == "editprev") {
            $("#editor-window").removeClass();
            $("#previewer-window").removeClass();
            $("#editor-window").addClass("edit_status"); //MODIFY THIS
            $("#previewer-window").addClass("hideit"); //MODIFY THIS
            $("#editorbutton").text('__');
            windowStatus = "edit";
            return;
        } else if(windowStatus == "edit") {
            $("#editor-window").removeClass();
            $("#previewer-window").removeClass();
            $("#editor-window").addClass(editprev_edit);
            $("#previewer-window").addClass(editprev_prev);
            $("#editorbutton").text('[]');
            windowStatus = "editprev";
            return;
        }
    });

    //showPreviewer function
    $("#previewerbutton").click(function() {
        console.log("showPreviewer() invoked");
        if(windowStatus == "editprev") {
            $("#previewer-window").removeClass();
            $("#editor-window").removeClass();
            $("#previewer-window").addClass("editprev_prev");  //MODIFY THIS
            $("#editor-window").addClass("hideit");    //MODIFY THIS
            $("#previewerbutton").text("__");
            windowStatus = "prev";
        } else if(windowStatus == "prev") {
            $("#previewer-window").removeClass();
            $("#editor-window").removeClass();
            $("#previewer-window").addClass(editprev_prev);
            $("#editor-window").addClass(editprev_edit);
            $("#previewerbutton").text("[]");
            windowStatus = "editprev";
        }
    });
});

//export { showEditor, showPreviewer }; [DEPRECATED ALTERNATED METHOD]
