
//Adding markers to show where the trash is located
var trashIcon = L.icon({
    iconUrl: './assets/Camera-trash-icon.png',
    iconSize: [35, 50],
});

var trashCanIcon = L.icon({
    iconUrl: './assets/Trash-can-with-Pic.png',
    iconSize: [35, 50],
});

//Array for the markers with the pictures
export const markersWithPics = [ 
    {
        coords: [12.1385, -86.2220],
        pic: './assets/trashPics/pic-of-the-corner.jpeg',
        icon: trashIcon
    },
    {
        coords: [12.1416, -86.2233],
        pic: './assets/trashPics/pic-last-one-on-top.jpeg',
        icon: trashIcon
    }
    ,
    {
        coords: [12.1408, -86.2240],
        pic: './assets/trashPics/pic-in-the-middle-area.jpeg',
        icon: trashIcon,
    }
    ,
    {
        coords:  [12.1390, -86.2233],
        pic: './assets/trashPics/pic1.jpeg',
        icon: trashIcon,
    }
    //Coordenadas del area del parque donde hay señales para tirar basura
    ,
    {
        coords: [12.1408, -86.2216],
        pic: './assets/trashPics/park-green-marks.jpeg',
        icon: trashCanIcon 
    },
    {
        coords: [12.1391, -86.2216],
        pic: './assets/trashPics/park-green-marks.jpeg',
        icon: trashCanIcon 
    },
    {
        coords: [12.1398, -86.2216],
        pic: './assets/trashPics/park-green-marks.jpeg',
        icon: trashCanIcon 
    },
    //Area del parque con basura
    {
        coords: [12.1398, -86.2212],
        pic: './assets/trashPics/pic-park-area.jpeg',
        icon: trashIcon 
    },

]