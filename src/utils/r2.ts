import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client
} from '@aws-sdk/client-s3'

const S3 = new S3Client({
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY as string
  },
  endpoint: process.env.R2_URL as string,
  region: 'auto'
})

export const checkExistingR2ImageKey = async (bucketName: string, imageKey: string) => {
  try {
    await S3.send(
      new GetObjectCommand({
        Bucket: bucketName,
        Key: imageKey
      })
    )

    return true
  }
  catch {
    return false
  }
}

export async function uploadImageToR2(bucketName: string, uploadingImageUrl: string, imageKey: string) {

  const response = await fetch(uploadingImageUrl),
    blob = await response.blob(),
    arrayBuffer = await blob.arrayBuffer(),
    uploadParams = {
      Bucket: bucketName,
      Key: imageKey,
      Body: arrayBuffer as Buffer,
      ContentType: blob.type
    },
    command = new PutObjectCommand(uploadParams)

  await S3.send(command)
}
