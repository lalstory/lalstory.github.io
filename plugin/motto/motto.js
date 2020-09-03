/**
  随机获取名言.

  author:prd.
  version:2016.7.22
  note:名言均来自[一个](https://www.wufazhuce.com)

  使用示例(关于使用的调用,请参考最底部的函数.):
        1.先引入本js.
        2.在想使用的地方,调用getMingYan()函数即可获取名言.[getMingYanHref()获取可以跳转至One的名言,getMingYanContent():只获取名言内容]
        3.名言中存储为json数据,index对应One的每一期号,content是名言.
        4.请尊重版权,在展示名言的同时,可将名言链接至One.例如:<a href="https://wufazhuce.com/one/14">是狼是人，日久见心。</br> - </br>小饭</a>其中的14为期号.
*/
var mingyan=new Array();
mingyan.push("{'index':1165,'content':'我对你的第一次告白，叫一生所爱'}");
mingyan.push("{'index':1212,'content':'如果说世上只有一个词可以牵动我的心跳，那便是你的名字'}");
mingyan.push("{'index':563,'content':'只想给你最好的，唯一的，全世界独一无二的浪漫'}");
mingyan.push("{'index':1291,'content':'夕阳为云彩披上了红色的霞装，我知道你分享的每一次晚霞，名字都叫——我好想你'}");
mingyan.push("{'index':1068,'content':'十七日尾，灯火万家长不灭。想你是三分泉水七分月，把青山浩渺看遍，你独天下奇绝。 '}");
mingyan.push("{'index':435,'content':'说不出来为什么爱你，但我知道，你就是我不爱别人的理由。'}");
mingyan.push("{'index':342,'content':'我知道这世界没有想象的好，终有一日你衰老我病亡，但我终究要感谢命运，不管它如何待我，至少让我遇见了你'}");
mingyan.push("{'index':918,'content':'想你的时候，风也无力，雨也淅沥，我打算爱你很久很久，没有想要放弃的念头。'}");
mingyan.push("{'index':1258,'content':'小女子不才，未能与先生谈笑风生，所有爱慕之意，尽付一句晚安之中。'}");
mingyan.push("{'index':889,'content':'我把我的整个灵魂都给你， 连同它的怪癖， 耍小脾气， 他真讨厌，只有一点好， 爱你。'}");
mingyan.push("{'index':1164,'content':'我是个俗气至顶的人，见山是山，见海是海，见花便是花。唯独见了你，云海开始翻涌，江潮开始澎湃，昆虫的小触须挠着全世界的痒。你无需开口，我和天地万物便通通奔向你。'}");
mingyan.push("{'index':717,'content':'当我跨过沉沦的一切，向着永恒开战的时候，你是我的军旗。'}");


/**
    随机获取名言.

    直接调用此函数即可.
*/
function getMingYan(){
  return (mingyan[parseInt(Math.random()*(mingyan.length-1)+1)]);
}

/*
  获取名言,并链接至One.
*/
function getMingYanHref(){
  var item = getItem();
  return "<a href='https://wufazhuce.com/one/"+item.index+"' target='_blank'>"+item.content+"</a>";
}

function getItem(){
  return eval('(' +(mingyan[parseInt(Math.random()*(mingyan.length-1)+1)])+ ')');
}

/*
  只获取内容.
*/
function getMingYanContent(){
  var item = getItem();
  return item['content'];
}