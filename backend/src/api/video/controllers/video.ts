import { Context } from 'koa';
import fs from 'fs';
import path from 'path';

export default {
  async stream(ctx: Context) {
    const { filename } = ctx.params;
    
    // 安全检查：只允许访问uploads目录下的视频文件
    if (!filename.match(/\.(mp4|webm|mov|avi)$/i)) {
      return ctx.throw(400, 'Invalid file type');
    }
    
    const filePath = path.join(process.cwd(), 'public', 'uploads', filename);
    
    try {
      const stat = fs.statSync(filePath);
      const fileSize = stat.size;
      const range = ctx.headers.range;
      
      if (range) {
        // 处理Range请求
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = (end - start) + 1;
        
        const stream = fs.createReadStream(filePath, { start, end });
        
        ctx.status = 206;
        ctx.set({
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize.toString(),
          'Content-Type': 'video/mp4',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Range',
          'Cache-Control': 'public, max-age=31536000'
        });
        
        ctx.body = stream;
      } else {
        // 完整文件请求
        ctx.set({
          'Content-Length': fileSize.toString(),
          'Content-Type': 'video/mp4',
          'Accept-Ranges': 'bytes',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'public, max-age=31536000'
        });
        
        ctx.body = fs.createReadStream(filePath);
      }
    } catch (error) {
      console.error('Video streaming error:', error);
      return ctx.throw(404, 'Video not found');
    }
  }
};