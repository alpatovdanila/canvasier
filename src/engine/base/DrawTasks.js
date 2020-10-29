const fillRect = ({ x, y, w, h, color = 'black' }) => (ctx) => {
  ctx.fillStyle = color
  ctx.fillRect(x, y, w, h)
}

const strokeRect = ({ x, y, w, h, color = 'black', strokeWidth = 1 }) => (
  ctx
) => {
  ctx.strokeStyle = color
  ctx.lineWidth = strokeWidth
  ctx.strokeRect(x, y, w, h)
}

const image = ({ x, y, imageAsset, w, h }) => (ctx) => {
  ctx.drawImage(imageAsset.asset, x, y)
}

const text = ({ x, y, text, color = 'black' }) => (ctx) => {
  ctx.fillStyle = color
  ctx.font = '12px Arial'
  ctx.fillText(text, x, y)
}

export const DrawTasks = { fillRect, strokeRect, image, text }
