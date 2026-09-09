@echo off

chcp 65001 > nul

call pnpm run build

echo 开始发布...

tar -cvf dist.tar -C ../ dist
echo 打包成功

scp dist.tar c-jz:/data/blog/
echo 上传 dist.tar 到服务器成功

ssh c-jz "rm -rf /data/blog/dist && tar -xvf /data/blog/dist.tar -C /data/blog && rm -f /data/blog/dist.tar"
echo 发布成功

del /f /q dist.tar
cd ..
rd /s /q dist
echo 删除本地 dist.tar, dist 成功