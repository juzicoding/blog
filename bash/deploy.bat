@echo off

chcp 65001 > nul

call pnpm run build

echo 开始发布...

tar -cvf dist.tar -C ../ dist
echo 打包成功

scp dist.tar c-jz:/juzi/blog/
echo 上传 dist.tar 到服务器成功

ssh c-jz "rm -rf /juzi/blog/dist && tar -xvf /juzi/blog/dist.tar -C /juzi/blog && rm -f /juzi/blog/dist.tar"
echo 发布成功

del /f /q dist.tar
echo 删除本地 dist.tar 成功