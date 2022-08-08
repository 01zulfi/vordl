const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const File = require("./file-model");

const getAllFiles = async () => File.find();

const saveFileInDatabase =
  ({ creator, vord }) =>
  async (fileMetadata) => {
    const fileDoc = new File({
      filename: fileMetadata.original_filename,
      url: fileMetadata.secure_url,
      format: fileMetadata.format,
      creator,
      vord,
    });
    await fileDoc.save();
  };

const uploadToCloudinary = (file, callback) => {
  const cloudinaryUploadStream = cloudinary.uploader.upload_stream(
    {
      folder: "files",
      filename_override: file.originalname,
      resource_type: "auto",
      unique_filename: false,
      use_filename: true,
    },
    async (error, result) => {
      if (error) console.log(error);
      console.log(result);
      await callback(result);
    }
  );

  streamifier.createReadStream(file.buffer).pipe(cloudinaryUploadStream);
};

const uploadAndSave = ({ file, creator, vord }) => {
  uploadToCloudinary(file, saveFileInDatabase({ creator, vord }));
};

module.exports = { getAllFiles, uploadAndSave };
