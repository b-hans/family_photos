function getAlbums(){

    var folder = DriveApp.getFolderById(SETTINGS.siteFolderId);
    var albums = folder.getFolders();

    var albumsArray = Array();
    while (albums.hasNext()){
        var a = albums.next();
        albumsArray.push (a.getName());
    }

    return albumsArray;
}