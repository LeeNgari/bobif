import {album} from "../models/album-model.js";

export const getAllAlbums = async (req, res, next) => {

    try{
        const albums = await  album.find()
        res.status(200).json(albums);
    }catch (error) {
        console.error(error);
        next(error);
    }
    
}
export const getAlbumById = async (req, res, next) => {
try{
    const { albumId } = req.params;
    const album = await album.findById(albumId).populate("songs");
    if (!album) {
        return res.status(404).json({ success: false, message: "Album not found" });
    }
    res.status(200).json(album);

}catch (error) {
    console.error(error);
    next(error);
}
}
