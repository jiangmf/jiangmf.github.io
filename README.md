**Run**
```Powershell
docker-compose up
```

**Build**
```Powershell
docker run --rm -it --volume="${PWD}:/srv/jekyll"  --env JEKYLL_ENV=production jekyll/jekyll:latest jekyll build
```