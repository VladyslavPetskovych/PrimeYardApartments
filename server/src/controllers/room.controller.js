const {roomService} = require("../services");

class RoomController {
    async findAll(req, res, next) {
        try {
            const data = await roomService.findAll();

            return res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async findById(req, res, next) {
        try {
            const {roomId} = req.params;
            const room = await roomService.findById(roomId);

            return res.json(room)
        } catch (e) {
            next(e)
        }
    }

    async updateImagesFromWubook(req, res, next) {
        try {
            await roomService.updateImagesFromWubook()

            return res.sendStatus(200)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new RoomController()