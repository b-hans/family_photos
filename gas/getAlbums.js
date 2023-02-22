function getAlbums(){

    var folder = DriveApp.getFolderById(SETTINGS.siteFolderId);
    var albums = folder.getFolders();

    var albumsArray = Array();
    while (albums.hasNext()){
        var a = albums.next();
        var images = a.getFiles();
        if (images.hasNext()){
            albumsArray.push (a.getName());
        }
    }

    albumsArray.sort();

    return albumsArray;
}