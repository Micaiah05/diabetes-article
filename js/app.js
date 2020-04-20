var i = 2;

function update(){
    if (i % 2 === 0){
        document.getElementById('choice').innerHTML = 'Showing: Micaiah\'s answers (Click to see Michael\'s)';
        document.getElementsByClassName('answer')[0].innerHTML = 'Type 1 diabetics are likely to experience mood swings while type 2 diabetics may experience numbness in their feet. Type 1 diabetes develops over several weeks of increased thirst and urination, while type 2 diabetes develops over several years of symptoms. A regulation of symptoms for type 1 diabetes could be a pancreas islet transplant, while gastric bypass can be used to regulate symptoms for type 2 diabetics.';
        document.getElementsByClassName('answer')[1].innerHTML = 'Keep away from sugary foods, quit smoking, and keep track of blood sugar.';
        document.getElementsByClassName('answer')[2].innerHTML = 'Because high blood sugar can lead to many complications, like ketoacidosis, which the body breaks down fat too fast. This can cause blood to be acidic and could contribute towards nausea and abdominal pain.';
        i++;
    }else if (i % 2 === 1){
        document.getElementById('choice').innerHTML = 'Showing: Michael\'s answers (Click to see Micaiah\'s again)';
        document.getElementsByClassName('answer')[0].innerHTML = 'Type 1 is Natural and Type 2 is Not Natural, Anyone can get it. Type 2 produces insulin and Type 1 does not produce insulin. Type 1 develop in weeks but Type 2 develops over the year of eating food or drinking drinks.';
        document.getElementsByClassName('answer')[1].innerHTML = 'Changes in lifestyle could change by eating less glucose items and smoke less if you do. You can exercise if you don\'t do it as often. A diet can change when you have diabetes because you should watch out what you eat.';
        document.getElementsByClassName('answer')[2].innerHTML = 'The importance of checking your blood sugar is because it can give symptoms of  Nausea and abdominal pain.  It is when the body is broken down into fats and can cause ketoacidosis.';
        i++;
    }
    console.log(i);
        
}

document.getElementById('choice').addEventListener('click', update);