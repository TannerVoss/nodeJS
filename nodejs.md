Node.js Lab
Exercise
PART 1 
1. Create a NodeJS project using npm init. 
2. Create a folder in your project called server. 
3. Create a JavaScript file in the server folder named server.js. 
4. In server.js Import (require) path and fs. 
5. Create an array consisting of at least 5 chirp objects. 
6. Write the array to a file in the root of the project called chirps.json. 
7. Add code to server.js that reads the file and outputs the chirps to the console

PART 2 
8. Install isomorphic-fetch from npm and save it to your package.json file. 
9. Create a JavaScript file in the root of your project called reddit.js. 
10. Use isomorphic-fetch to retrieve articles from https://reddit.com/r/programmingHumor.json. 
11. Feel free to use any api to fetch information from*
12. Extract from each article title, url, and author 
13. Push each extracted article to an array. 
14. Write the array to a file in the root of your project called popular-articles.json.

ADVANCED 
16. Create a JavaScript file named popular-downloader.js. 
17. Create a directory in the root of your project named downloads. 
18. Using isomorphic-fetch, pull articles from https://reddit.com/r/programmingHumor.json. 
19. If the article is a .jpg, .gif, or a .png (hint: check the url): Use isomorphic-fetch to download the media. 
20. Write each download to a file (named the id of the article) in the downloads directory.

