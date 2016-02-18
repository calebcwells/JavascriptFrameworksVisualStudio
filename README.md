# Start Here
Starter projects for MVC 6, Angular 2 and React in Visual Studio 2015

### Dependencies
This solution contains three projects that require Visual Studio 2015 and .NET 5 RC Update 1

+ Download the free community version of VS2015 at https://www.visualstudio.com/post-download-vs?sku=community&clcid=0x409
+ Go to https://get.asp.net/ and click on the download for ASP.NET 5 RC to install the new templates

If you have Visual Studio 2015 installed you should also have node/npm installed. In order to build the Angular 2 and React projects you need to install a few packages globally. Run the following line from an admin command prompt.
> npm install webpack typescript tslint eslint -g

When you open the solution it will restore all local nuget and npm dependencies. VS2015 has support for npm, bower, gulp and grunt built in but I have chosen to use npm with webpack.

To build the Angular 2 and React projects navigate to the project root (ex. \StartHere\src\Angular2\) in a command prompt and type webpack. You can also manage webpack in the VS2015 Task Runner Explorer by installing an awesome extension created by Mads Kristensen. Download it at https://visualstudiogallery.msdn.microsoft.com/5497fd10-b1ba-474c-8991-1438ae47012a.

