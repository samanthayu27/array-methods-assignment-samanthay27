const kpop = {
    groups: [{
        group: "NewJeans",
        Member_Names: "Minji, Hanni, Danielle, Haerin, Hyein",
        Debuted: "July 22, 2022",
        Awards: "18",
        Nomminations: "49",
        Fan_Name: "Bunnies/Tokki"
    },
    {
        group: "LeSerrafim",
        Member_Names: "Sakura, Chaewon, Yunjin, Kazuha, Eunchae",
        Debuted: "May 2, 2022",
        Awards: "14",
        Nomminations: "39",
        Fan_Name: "FEARNOT"
    },
    {
        group: "AESPA",
        Member_Names: "Karina, Winter, Giselle, Ningning",
        Debuted: "November 17,2020",
        Awards: "42",
        Nomminations: "91",
        Fan_Name: "MY"
    },
    {
        group: "IVE",
        Member_Names: "Gaeul, Yujin, Rei, Wonyoung, Liz, Leeseo",
        Debuted: "December 1, 2021",
        Awards: "46",
        Nomminations: "71",
        Fan_Name: "DIVE" 
    }
]};
//gives a list of items and the properties of the items (group name, the names of the members, the day they debuted, awards, nominations, and fan name)


kpop.groups.forEach(function(groups){
    console.log(groups.group)
})
//for each kpop group in the array, the function will give the name of the group

kpop.groups.forEach(function(groups) {
    console.log(groups.Member_Names)
});
//for each kpop group in the array, the function will give the names of the members 

kpop.groups.forEach(function(groups) {
    console.log(groups.Debuted)
});
//for each kpop group in the array, the function will give the day that the group debuted

kpop.groups.forEach(function(groups) {
    console.log(groups.Nomminations)
});
//for each kpop group in the array, the functio will give the number of nomminations the group recieved

kpop.groups.forEach(function(groups) {
    console.log(groups.Fan_Name)
});
//for each kpop group in the array, the function will give the fandom name 

const filterkpop = kpop.groups.filter(function(groups){
    return Number(groups.Awards) < 40; 
});
console.log(filterkpop);
// names(?) the function to be "filterkpop", tells the function to filter and where, returns array of the kpop group that has less than 40 awards 