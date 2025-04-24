const express = require('express');
const router = express.Router();
module.exports = router;

const tasks_Mid = require("../middleware/tasks_Mid");

router.put("/ChangeOwner", [tasks_Mid.ChangeWorker], (req, res) => {
    if (req.success) {
        res.status(200).json({ msg: "ok" });
    } else {
        return res.status(500).json({ message: req.error || "Unknown error" });
    }
});

router.put("/SetTaskStatus", [tasks_Mid.ChangeMileStoneVal], (req, res) => {
    if (req.success) {
        res.status(200).json({ msg: "ok" });
    } else {
        return res.status(500).json({ message: req.error || "Unknown error" });
    }
});

router.post('/ChangeOrder', [tasks_Mid.ChangeOrder], (req, res) => {
    if (req.success) {
        res.status(200).json({ msg: "ok" });
    } else {
        return res.status(500).json({ message: req.error || "Unknown error" });
    }
});

router.post('/', [tasks_Mid.AddTasks], (req, res) => {
    if (req.success) {
        res.status(200).json({ msg: "ok", Last_Id: req.insertId });
    } else {
        return res.status(500).json({ message: req.error || "Unknown error" });
    }
});

router.get('/', [tasks_Mid.ReadTasks], (req, res) => {
    if (req.success) {
        res.status(200).json({ msg: "ok", data: req.tasks_data });
    } else {
        return res.status(500).json({ message: req.error || "Unknown error" });
    }
});

router.get('/TaskMStoneStatus', [tasks_Mid.GetAllMilestonsStatus], (req, res) => {
    if (req.success) {
        res.status(200).json({ msg: "ok", data: req.mStoneStatusPerTask });
    } else {
        return res.status(500).json({ message: req.error || "Unknown error" });
    }
});

router.put('/', [tasks_Mid.UpdateTasks], (req, res) => {
    if (req.success) {
        res.status(200).json({ msg: "ok" });
    } else {
        return res.status(500).json({ message: req.error || "Unknown error" });
    }
});

router.delete('/', [tasks_Mid.DeleteTasks], (req, res) => {
    if (req.success) {
        res.status(200).json({ msg: "ok" });
    } else {
        return res.status(500).json({ message: req.error || "Unknown error" });
    }
});
