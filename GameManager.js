// -----JS CODE-----
// @input int scores
// @input SceneObject[] Chick
// @input SceneObject Fish
// @input SceneObject drit 
// @input SceneObject drit2 
// @input SceneObject win_partical
// @input SceneObject win
//@input  SceneObject win_audio

function init() {
    script.scores = 0;
    script.Fish.enabled = false;
    script.drit.enabled = true;
    script.drit2.enabled = true;
    script.win_partical.enabled = false;
    script.win.enabled = false;
    script.win_audio.enabled = false;
    for(var i = 0; i < script.Chick.length; i++){
        script.Chick[i].enabled = true;
    }
}

function ClickChick(name) {
    print(name.replace("trash", ""));
    script.Chick[+name.replace("trash", "")].enabled = false;
    script.scores++;
    
//    var checkAllDisable = false;
//     for(var i = 0; i < script.Chick.length; i++){
//        checkAllDisable = script.Chick[i].enabled;
//    }
    
    if(script.scores >= 9){
        print("finish")
        script.Fish.enabled = true;
        script.drit.enabled = false; 
        script.drit2.enabled = false;
        script.win_partical.enabled = true;
        script.win.enabled = true;
        script.win_audio.enabled = true;
    }
}

script.ClickChick = ClickChick;

init();