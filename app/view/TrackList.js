Ext.define('dirvercall.view.TrackList', {
    extend: 'Ext.dataview.List',
    xtype: 'tracklist',
    requires: [
    ],
    config: {
        styleHtmlContent: true,
        itemTpl: 
            ['<div>',
            '<img src="{icon}">',
            '{name}',
            '</div>'].join(''),
        data: [
            {name : 'Hello $', icon: "icon.jpg"},
            {name : 'Hello $', icon: "icon.jpg"},
            {name : 'Hello $', icon: "icon.jpg"},
            {name : 'Hello $', icon: "icon.jpg"},
            {name : 'Hello $', icon: "icon.jpg"},
            {name : 'Hello $', icon: "icon.jpg"},
            {name : 'Hello $', icon: "icon.jpg"},
            {name : 'Hello $', icon: "icon.jpg"},
            {name : 'Hello $', icon: "icon.jpg"},
            {name : 'Hello $', icon: "icon.jpg"},
            {name : 'Hello $', icon: "icon.jpg"},
            {name : 'Hello $', icon: "icon.jpg"},
            {name : 'Hello $', icon: "icon.jpg"},
            {name : 'Hello $', icon: "icon.jpg"},
            {name : 'Hello $', icon: "icon.jpg"},
            {name : 'Hello $', icon: "icon.jpg"},
            {name : 'Hello $', icon: "icon.jpg"},
            {name : 'Hello $', icon: "icon.jpg"},
            {name : 'Hello $', icon: "icon.jpg"},
            {name : 'Hello $', icon: "icon.jpg"}
        ]   
    }
});
