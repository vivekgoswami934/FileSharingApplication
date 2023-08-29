import File from "../models/file.js";

// uploading file to server

export const uploadImage = async (req, res) => {
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  };

  try {
    const file = await File.create(fileObj);
    console.log(file);
    res.status(200).json({ path: `http://localhost:8000/file/${file._id}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// getting file from server

export const downloadImage = async (req, res) => {
    console.log("vivek goswami")
    console.log(req.params.fileId);
  try {
    const file = await File.findById(req.params.fileId);
    file.downloadContent++;
    await file.save();
     return  res.download(file.path, file.name);
  } catch (err) {
    console.error(err.message);
   return res.status(500).json({ error: err.message });
  }
};
