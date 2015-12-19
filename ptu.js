$(".delCap").click(function() {
    $(event.target).parent().parent().remove();
  });
$(".hitp").change(function() {
    hpChange();
});
$(".ev").change(function() {
    evChange();
});
$(".phy").click(function() {
    var t = $(event.target).closest("table");
    var o = {name:t.find(".name").val(),cat:"Physical",dc:t.find(".cat").val(),user:$("#nick").val(),ab:$("#Acc").val(),ac:t.find(".ac").val(),type:t.find(".typ").val(),freq:t.find(".fre").val(),da:t.find(".amount").val(),dd:t.find(".dice").val(),db:t.find(".bonus").val(),range:t.find(".ran").val(),effect:t.find(".eff").val(),att:$('#statTab tr:eq('+2+') td:eq('+4+')').find("input").val()};
    if(o.att==""){o.att=0}
    roll(o);
});
$(".spec").click(function() {
    var t = $(event.target).closest("table");
    var o = {name:t.find(".name").val(),cat:"Special",dc:t.find(".cat").val(),user:$("#nick").val(),ab:$("#Acc").val(),ac:t.find(".ac").val(),type:t.find(".typ").val(),freq:t.find(".fre").val(),da:t.find(".amount").val(),dd:t.find(".dice").val(),db:t.find(".bonus").val(),range:t.find(".ran").val(),effect:t.find(".eff").val(),att:$('#statTab tr:eq('+4+') td:eq('+4+')').find("input").val()};
    if(o.att==""){o.att=0}
    roll(o);
});
$(".stat").click(function() {
    var t = $(event.target).closest("table");
    var o = {name:t.find(".name").val(),cat:"Status",dc:t.find(".cat").val(),user:$("#nick").val(),ab:$("#Acc").val(),ac:t.find(".ac").val(),type:t.find(".typ").val(),freq:t.find(".fre").val(),range:t.find(".ran").val(),effect:t.find(".eff").val()};
    roll(o);
});
$(".base").change(function() {
    var v = $(event.target).val();
    var list = dbCalc(v);
    var t = $(event.target).closest("table");
    t.find(".dice").val(list.dice);
    t.find(".amount").val(list.amount);
    t.find(".bonus").val(list.bonus);
});
$("#newCap").click(function() {
  var table = document.getElementById("capabilities");
  x = document.getElementById("capabilities").rows.length;
  var row = table.insertRow(x-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = "<input class='sheet-shortfield9'></input>";
  cell2.innerHTML = "<input class='sheet-shortfield2' type='number'></input>";
  cell3.innerHTML = "<input type='button' class='delCap' value='X'>";
  $(".delCap").click(function() {
    $(event.target).parent().parent().remove()
  });
});

 $(".delMove").click(function() {
    $(event.target).parent().parent().parent().parent().parent().remove();
  });

$("#newMove").click(function() {
  var str = "<br><div><h4 class='sheet-minihead'>Additional Move</h4> <span class='bold allign-1'>Special Move Types:</span></td> <input class='allign' type='radio' name='strike' checked><span class='allign-2'>Normal Move</span> <input class='allign five-strike' type='radio' name='strike' value='Five'><span class='allign-2'>Five-Strike</span>  <table class='sheet-table'> <tr> <td class='sheet-table-header-1'>Move Name:</td> <td colspan='3'> <input class='sheet-shortfield9 name' type='text' name='attr_Move_Name' /> </td> </tr> <tr> <td class='sheet-table-header-1'>Frequency:</td> <td colspan='3'> <input class='sheet-shortfield9 fre' type='text' name='attr_Move_Freq' /> </td> </tr> <tr> <td class='sheet-table-header-1'>AC:</td> <td colspan='3'> <input class='sheet-shortfield2 ac' type='number' name='attr_Move_AC' /> </td> </tr> <tr> <td class='sheet-table-header-1'>Type:</td> <td colspan='3'> <input class='sheet-shortfield9 typ' type='text' name='attr_Move_Type' /> </td> </tr> <tr> <td class='sheet-table-header'>Damage Base:</td> <td> <input class='sheet-shortfield2 base' type='number' name='attr_Move_DB' /> </td> </tr> <tr> <td class='sheet-table-header-1'>Damage Dice:</td> <td colspan='3'> <input class='sheet-shortfield2 amount' type='number' name='attr_Move_Amount' /> <select class='sheet-shortfield10 dice' name='attr_Move_Dice'> <option value='d6'>d6</option> <option value='d8'>d8</option> <option value='d10'>d10</option> <option value='d12'>d12</option> </select>+ <input class='sheet-shortfield2 bonus' type='number' name='attr_Move_Bonus' /> </td> </tr> <tr class='sheet-five-strike'> <td class='sheet-table-header-1'>Damage Base (Two Hits):</td> <td colspan='3'> <input class='sheet-shortfield2' type='number' name='attr_Move_Amount2' /> <select class='sheet-shortfield2' name='attr_Move_Dice2' class='dtype'> <option value='d6'>d6</option> <option value='d8'>d8</option> <option value='d10'>d10</option> <option value='d12'>d12</option> </select>+ <input class='sheet-shortfield2' type='number' name='attr_Move_Bonus2' /> </td> </tr> <tr class='sheet-five-strike'> <td class='sheet-table-header-1'>Damage Base (Three Hits):</td> <td colspan='3'> <input class='sheet-shortfield2' type='number' name='attr_Move_Amount3' /> <select class='sheet-shortfield2' name='attr_Move_Dice3' class='dtype'> <option value='d6'>d6</option> <option value='d8'>d8</option> <option value='d10'>d10</option> <option value='d12'>d12</option> </select>+ <input class='sheet-shortfield2' type='number' name='attr_Move_Bonus3' /> </td> </tr> <tr class='sheet-five-strike'> <td class='sheet-table-header-1'>Damage Base (Four Hits):</td> <td colspan='3'> <input class='sheet-shortfield2' type='number' name='attr_Move_Amount4' /> <select class='sheet-shortfield2' name='attr_Move_Dice4' class='dtype'> <option value='d6'>d6</option> <option value='d8'>d8</option> <option value='d10'>d10</option> <option value='d12'>d12</option> </select>+ <input class='sheet-shortfield2' type='number' name='attr_Move_Bonus4' /> </td> </tr> <tr class='sheet-five-strike'> <td class='sheet-table-header-1'>Damage Base (Five Hits):</td> <td colspan='3'> <input class='sheet-shortfield2' type='number' name='attr_Move_Amount5' /> <select class='sheet-shortfield2' name='attr_Move_Dice5' class='dtype'> <option value='d6'>d6</option> <option value='d8'>d8</option> <option value='d10'>d10</option> <option value='d12'>d12</option> </select>+ <input class='sheet-shortfield2' type='number' name='attr_Move_Bonus5' /> </td> </tr> <tr> <td class='sheet-table-header-1'>Damage Category:</td> <td colspan='3'> <input class='sheet-shortfield9 cat' type='text' name='attr_Move_DType' /> </td> </tr> <tr class='sheet-normal'> <td class='sheet-table-header-1'>Damage Rolls:</td> <td colspan='3'> <button type='roll' name='roll_MoveAtkPhys' /> <img src='http://www.serebii.net/pokedex-dp/type/physical.png'> <button type='roll' name='roll_MoveAtkSpec' /> <img src='http://www.serebii.net/pokedex-dp/type/special.png'> <button type='roll'  name='roll_MoveAtkStat'/> <img src='http://www.serebii.net/pokedex-dp/type/other.png'> </td> </tr> <tr style='display:none;'> </tr> <tr class='sheet-five-strike'>  <td class='sheet-table-header-1'>Damage Rolls:</td> <td colspan='3'> <button type='roll'  name='roll_MoveAtkPhys' /> <img src='http://www.serebii.net/pokedex-dp/type/physical.png'> <button type='roll'  name='roll_MoveAtkSpec' /> <img src='http://www.serebii.net/pokedex-dp/type/special.png'> </td> </tr> <tr> <td class='sheet-table-header-1'>Range:</td> <td colspan='3'> <input class='sheet-shortfield9' name='attr_Move_Range' type='text' /> </td> </tr> <tr> <td class='sheet-table-header-1'>Effects:</td> <td colspan='3'> <textarea class='sheet-textarea' name='attr_Move_Effects'></textarea> </td> </tr> <tr> <td class='sheet-table-header-1' colspan = '3'>Delete Move:</td> <td><input type='button' class='delMove' value='X'/></td> </tr> </table></div>";
      $($(event.target).parent().parent().parent().parent()).before(str);
  $(".delMove").click(function() {
    $(event.target).parent().parent().parent().parent().parent().remove();
  });
  $(".base").change(function() {
    var v = $(event.target).val();
    var list = dbCalc(v);
    var t = $(event.target).closest("table");
    t.find(".dice").val(list.dice);
    t.find(".amount").val(list.amount);
    t.find(".bonus").val(list.bonus);
  });
});
$(".delEdge").click(function() {
    $(event.target).parent().parent().remove()
  });
$("#newEdge").click(function() {
  var str = "<tr><td class='sheet-shortfield5'> <input class='sheet-shortfield9' name='attr_EdgeName' type='text' /> </td> <td> <input class='sheet-shortfield2' type='number' name='attr_EdgeCost' title='This is only used for Pokemon characters!' /> </td><td><input type='button' class='delEdge' value='X'/></td></tr>";
  $($(event.target).parent().parent()).before(str);
  $(".delEdge").click(function() {
    $(event.target).parent().parent().remove()
  });
});
$(".delFeat").click(function() {
    $(event.target).parent().parent().parent().parent().parent().remove();
  });
$("#newFeat").click(function() {
  var str = "<div><h4 class='sheet-minihead'>Feature</h4> <table class='sheet-table'> <tr> <td class='sheet-table-header'>Name:</td> <td> <input class='sheet-shortfield9' name='attr_Feature_Name' type='text'> </td> </tr> <tr> <td class='sheet-table-header'>Frequency:</td> <td> <input class='sheet-shortfield9' name='attr_Feature_Freq' type='text'> </td> </tr> <tr> <td class='sheet-table-header'>Target:</td> <td> <input class='sheet-shortfield9' name='attr_Feature_Target' type='text'> </td> </tr> <tr> <td class='sheet-table-header'>Other Info:</td> <td> <textarea class='sheet-textarea-b' name='attr_Feature_Info'></textarea> </td> </tr> <tr> <td class='sheet-table-header'>Display:</td> <td> <button type='roll' name='roll_FeatRoll' /> Show</td> </tr><tr><td class='sheet-table-header'>Delete Feat:</td><td><input type='button' class='delFeat' value='X'/></td></tr></table></div>";
  $($(event.target).parent().parent().parent().parent()).before(str);
  $(".delFeat").click(function() {
    $(event.target).parent().parent().parent().parent().parent().remove();
  });
});
$(".delAbil").click(function() {
    $(event.target).parent().parent().parent().parent().parent().remove();
  });
$("#newAbil").click(function() {
  var str = "<div><h4 class='sheet-minihead'>Ability</h4> <table class='sheet-table'> <tr> <td class='sheet-table-header'>Name:</td> <td> <input class='sheet-shortfield9' name='attr_Ability_Name' type='text'> </td> </tr> <tr> <td class='sheet-table-header'>Frequency:</td> <td> <input class='sheet-shortfield9' name='attr_Ability_Freq' type='text'> </td> </tr> <tr> <td class='sheet-table-header'>Target:</td> <td> <input class='sheet-shortfield9' name='attr_Ability_Target' type='text'> </td> </tr> <tr> <td class='sheet-table-header'>Other Info:</td> <td> <textarea class='sheet-textarea-b' name='attr_Ability_Info'></textarea> </td> </tr> <tr> <td class='sheet-table-header'>Display:</td> <td> <button type='roll' name='roll_AbilRoll' /> Show</td> </tr><tr><td class='sheet-table-header'>Delete Ability:</td><td><input type='button' class='delAbil' value='X'/></td></tr></table> </fieldset></div>";
  $($(event.target).parent().parent().parent().parent()).before(str);
  $(".delAbil").click(function() {
    $(event.target).parent().parent().parent().parent().parent().remove();
  });
});
$(".delInv").click(function() {
    $(event.target).parent().parent().remove();
  });
$("#newInv").click(function() {
  var str = "<tr> <td class='sheet-shortfield6' style='width:25%;'> <input type='text' class='sheet-shortfield' name='attr_InventoryName' /> </td> <td class='sheet-shortfield7' style='width:65%;'> <input type='text' class='sheet-shortfield' name='attr_InventoryDesc' /> </td> <td class='sheet-shortfield8' style='width:5%;'> <input class='sheet-shortfield2' type='number' class='sheet-shortfield' name='attr_InventoryQuantity'/></td><td style='width:5%;'><input type='button' class='delInv' value='X'/></td></tr>";
  $($(event.target).parent().parent()).before(str);
  $(".delInv").click(function() {
    $(event.target).parent().parent().remove();
  });
});
$(".statAdd").change(function() {
  var i;
  for (i = 1; i<7 ; i++) {
    var base = $('#statTab tr:eq('+i+') td:eq('+1+')');
    var all = $('#statTab tr:eq('+i+') td:eq('+2+')');
    var stage;
    if(i==1) {stage = 1;}
    else {stage = $('#statTab tr:eq('+i+') td:eq('+3+')');
      stage=stage.find("select").val();}
    var tot = $('#statTab tr:eq('+i+') td:eq('+4+')');
    base = base.find("input").val();all = all.find("input").val();
    tot.find("input").val(Math.floor((parseInt(base)+parseInt(all))*stage));
  }
  hpChange();
  evChange();
});
function hpChange() {
  var hp = $('#statTab tr:eq('+1+') td:eq('+4+')').find("input").val();
  var lv = $('#classTab tr:eq('+4+') td:eq('+1+')').find("input").val();
  var tp = $("input[name = charType]:checked").val();
  var inj = $('#mainhp tr:eq('+4+') td:eq('+1+')').find("input").val();
  var hitp = (1+tp)*lv + hp*3 + 10;
  $('#mainhp tr:eq('+2+') td:eq('+1+')').find("input").val(hitp);
  $('#mainhp tr:eq('+1+') td:eq('+1+')').find("input").val(Math.floor(hitp*(10-inj)/10));
  $('#hpMark tr:eq('+0+') td:eq('+1+')').find("input").val(Math.floor(hitp*.75));
  $('#hpMark tr:eq('+0+') td:eq('+3+')').find("input").val(Math.floor(hitp*.5));
  $('#hpMark tr:eq('+1+') td:eq('+1+')').find("input").val(Math.floor(hitp*.25));
  $('#hpMark tr:eq('+1+') td:eq('+3+')').find("input").val(Math.floor(hitp/3));
  $('#hpMark tr:eq('+2+') td:eq('+1+')').find("input").val(Math.floor(hitp/6));
  $('#hpMark tr:eq('+2+') td:eq('+3+')').find("input").val(Math.floor(hitp/8));
  $('#hpMark tr:eq('+3+') td:eq('+1+')').find("input").val(Math.floor(hitp*.1));
  $('#hpMark tr:eq('+3+') td:eq('+3+')').find("input").val(Math.floor(hitp/16));
}
function evChange() {
  var def = $('#statTab tr:eq('+3+') td:eq('+4+')').find("input").val();
  var spdef = $('#statTab tr:eq('+5+') td:eq('+4+')').find("input").val();
  var speed = $('#statTab tr:eq('+6+') td:eq('+4+')').find("input").val();
  var bon = $('#statTab tr:eq('+8+') td:eq('+3+')').find("select").val();
  def = Math.floor(def/5);spdef = Math.floor(spdef/5);speed = Math.floor(speed/5);
  def = Math.min(def,6);spdef = Math.min(spdef,6);speed = Math.min(speed,6);
  $('#evaTab tr:eq('+0+') td:eq('+1+')').find("input").val(def);
  $('#evaTab tr:eq('+0+') td:eq('+2+')').find("input").val(bon);
  $('#evaTab tr:eq('+0+') td:eq('+3+')').find("input").val(Math.min(def+bon,9));
  $('#evaTab tr:eq('+1+') td:eq('+1+')').find("input").val(spdef);
  $('#evaTab tr:eq('+1+') td:eq('+2+')').find("input").val(bon);
  $('#evaTab tr:eq('+1+') td:eq('+3+')').find("input").val(Math.min(spdef+bon,9));
  $('#evaTab tr:eq('+2+') td:eq('+1+')').find("input").val(speed);
  $('#evaTab tr:eq('+2+') td:eq('+2+')').find("input").val(bon);
  $('#evaTab tr:eq('+2+') td:eq('+3+')').find("input").val(Math.min(speed+bon,9));
}

function dbCalc(v){
        if (v==1) {
            return {amount:1,dice:"d6",bonus:1};
        } else if (v==2) {
            return {amount:1,dice:"d6",bonus:3};
        } else if (v==3) {
            return {amount:1,dice:"d6",bonus:5};
        } else if (v==4) {
            return {amount:1,dice:"d8",bonus:6};
        } else if (v==5) {
            return {amount:1,dice:"d8",bonus:8};
        } else if (v==6) {
            return {amount:2,dice:"d6",bonus:8};
        } else if (v==7) {
            return {amount:2,dice:"d6",bonus:10};
        } else if (v==8) {
            return {amount:2,dice:"d8",bonus:10};
        } else if (v==9) {
            return {amount:2,dice:"d10",bonus:10};
        } else if (v==10) {
            return {amount:3,dice:"d8",bonus:10};
        } else if (v==11) {
            return {amount:3,dice:"d10",bonus:10};
        } else if (v==12) {
            return {amount:3,dice:"d12",bonus:10};
        } else if (v==13) {
            return {amount:4,dice:"d10",bonus:10};
        } else if (v==14) {
            return {amount:4,dice:"d10",bonus:15};
        } else if (v==15) {
            return {amount:4,dice:"d10",bonus:20};
        } else if (v==16) {
            return {amount:5,dice:"d10",bonus:20};
        } else if (v==17) {
            return {amount:5,dice:"d12",bonus:25};
        } else if (v==18) {
            return {amount:6,dice:"d12",bonus:25};
        } else if (v==19) {
            return {amount:6,dice:"d12",bonus:30};
        } else if (v==20) {
            return {amount:6,dice:"d12",bonus:35};
        } else if (v==21) {
            return {amount:6,dice:"d12",bonus:40};
        } else if (v==22) {
            return {amount:6,dice:"d12",bonus:45};
        } else if (v==23) {
            return {amount:6,dice:"d12",bonus:50};
        } else if (v==24) {
            return {amount:6,dice:"d12",bonus:55};
        } else if (v==25) {
            return {amount:6,dice:"d12",bonus:60};
        } else if (v==26) {
            return {amount:7,dice:"d12",bonus:65};
        } else if (v==27) {
            return {amount:8,dice:"d12",bonus:70};
        } else if (v==28) {
            return {amount:8,dice:"d12",bonus:80};
        }
    }
function roll(o) {
  var str;
  if(o.name==""||o.dc==""||o.user=="") {alert("That, ah, won't work. You're missing some info, like a name or damage category for your move, or a name for your character.");}
  else {
    str = "[table=1,]"+o.user+" used "+o.name+"![c]";
    if(o.ac!=""){
      if(o.ab!=""){
      str = str +"[table=2,]AC:[c][roll]1d20[/roll]+"+o.ab+" ≥ "+o.ac+" + Target Evasion[c]";}
      else{
      str = str +"[table=2,]AC:[c][roll]1d20[/roll] ≥ "+o.ac+" + Target Evasion[c]";
      }
    }else{
      str=str+"No Accuracy Check[c][table=2,]";
    }
    if(o.type!=""){
      str = str+"Type:[c]"+o.type+"[c]";
    }
    if(o.freq!=""){
      str = str+"Frequency:[c]"+o.freq+"[c]";
    }
    if(o.cat!="Status"&&o.da!=""){
      str = str+"Damage:[c][roll]"+o.da+o.dd+"+"+o.db+"+"+o.att+"[/roll][c]Crit:[c][roll]"+(2*parseInt(o.da))+o.dd+"+"+(2*parseInt(o.db))+"+"+o.att+"[/roll][c]"
    }
    str = str +"Damage Category:[c]"+o.dc+"";
    if(o.range!=""){
      str = str+"[c]Range:[c]"+o.range
    }
    if(o.effect!=""){
      str = str+"[c]Effects:[c]"+o.effect
    }
    str = str+"[/table][/table]"
    window.prompt("Copy to clipboard: Ctrl+C, Enter", str);
  }
}
