import {song} from "../models/song-model.js";

export const getAllSongs = async (req, res, next) => {
    try {
        const songs = await song.find().sort({createdAt:-1})
        res.status(200).json(songs);
    } catch (error) {
        console.error(error);
        next(error);
    }
}
export const getFeaturedSongs = async (req, res, next) => {
    try {
        const songs = await song.aggregate([
            {
            $sample:{size: 6}
            }, {
                $project: {
                    id:1,
                    title:1,
                    artist:1,
                    imageUrl:1,
                    audioUrl:1,
                }
            }
        ])
        res.status(200).json(songs);
    } catch (error) {
        console.error(error);
        next(error);
    }
}
export const getMadeForYouSongs = async (req, res, next) => {
     try {
        const songs = await song.aggregate([
            {
            $sample:{size: 4}
            }, {
                $project: {
                    id:1,
                    title:1,
                    artist:1,
                    imageUrl:1,
                    audioUrl:1,
                }
            }
        ])
        res.status(200).json(songs);
    } catch (error) {
        console.error(error);
        next
}
}
export const getTrendingSongs = async (req, res, next) => {
     try {
        const songs = await song.aggregate([
            {
            $sample:{size: 4}
            }, {
                $project: {
                    id:1,
                    title:1,
                    artist:1,
                    imageUrl:1,
                    audioUrl:1,
                }
            }
        ])
        res.status(200).json(songs);
    } catch (error) {
        console.error(error);
        next(error);
}
}