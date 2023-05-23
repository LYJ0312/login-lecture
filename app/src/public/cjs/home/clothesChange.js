let day_temp = [];//옷 종류 구분함수 [아침, 점심, 저녁]
let set_reg = 'M';
let bw = [];

function Cloth_change() {
    if(weadet.length!==0){
        T_logic();
        for (let ic = 0; ic < 3; ic++) {
            const clothes = set_reg === 'M' ? Cloths_M(day_temp[ic]) : Cloths_W(day_temp[ic]);

            document.getElementById(`chara-img${[ic]}`).src = (set_reg === 'M') ? 'cImg/Human_M.png' : 'cImg/Human_W.png';
            document.getElementById(`chara-clo${[ic]}`).src = `cImg/${clothes[0]}.png`;
            document.getElementById(`chara-pan${[ic]}`).src = `cImg/${clothes[1]}.png`;
            document.getElementById(`chara-umb${[ic]}`).src = bw[ic] ? 'cImg/umbrella.png' : 'cImg/Clean.png';
        }
    }
}

function GenderToggle() {
    const isFemale = document.getElementById('toggle').checked;
    set_reg = isFemale ? 'W' : 'M';
    Cloth_change();
}// 성별 토글 스위치

(() => {
    const set_toggle = document.getElementById('toggle');
    set_toggle.addEventListener('change', GenderToggle);
})();

window.onload = function(){
    weather.searchseoul();
};

/*
기온별로 A,B,C,D,E단계
성별 선택 랜덤추천
상의(원피스여부) 하의
모자 마스크 우산

*/