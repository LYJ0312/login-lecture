let weadet = [];
function T_logic(){
    const D_desc = ['rain','snow']
    let getTClass=[];

    for(let j=0;j<3;j++) {
        let i = 0;
        if (weadet[1] < 10) {
            for (; i < D_desc.length; i++) {
                if (weadet[0].indexOf(D_desc[i]) !== -1) {
                    break;
                }
            }
            getTClass.push((i === D_desc.length) ? "A" : "B");//맑음:악천후
            bw.push(!(i === D_desc.length));
        }
        else if (weadet[1] < 24) {
            for (; i < D_desc.length; i++) {
                if (weadet[0].indexOf(D_desc[i]) !== -1) {
                    break;
                }
            }
            getTClass.push((i === D_desc.length) ? "C" : "D");//맑음:악천후
            bw.push(!(i === D_desc.length));
        }
        else {
            for (; i < D_desc.length; i++) {
                if (weadet[0].indexOf(D_desc[i]) !== -1) {
                    break;
                }
            }
            getTClass.push((i === D_desc.length) ? "E" : "F");//맑음:악천후
            bw.push(!(i === D_desc.length));
        }
    }
    day_temp = getTClass;
}
//[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}]