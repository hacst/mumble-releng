// This script creates a set of Windows shortcuts (.lnk files)
// in a Mumble build environment such that it can be launched
// more easily.
//
// The shortcuts are created in such a way that they can be copied
// out of the build environment and still run the environment
// they originated within.
//
// This allows users to copy them to the desktop or to pin them to
// the Win 7/8 task bar by simply dragging the shortcuts.

var name = WScript.Arguments.Item(0);
var shell = new ActiveXObject("WScript.Shell");
var home = shell.ExpandEnvironmentStrings("%USERPROFILE%");

// Create cmd shortcut
var lnk = shell.CreateShortcut(home + "\\" + name + "\\MumbleBuild - cmd.lnk");
lnk.Description = "Launches a Mumble Build environment command prompt (cmd.exe)";
lnk.IconLocation = "%WINDIR%\\system32\\cmd.exe";
lnk.TargetPath = "%WINDIR%\\system32\\cmd.exe";
lnk.Arguments = "/k prep.cmd";
lnk.WindowStyle = 1;
lnk.WorkingDirectory = "%USERPROFILE%\\" + name;
lnk.Save();

// Create cygwin shortcut
lnk = shell.CreateShortcut(home + "\\" + name + "\\MumbleBuild - cygwin.lnk");
lnk.Description = "Launches a Mumble Build environment command prompt (cygwin bash)";
lnk.IconLocation = "%WINDIR%\\system32\\cmd.exe";
lnk.TargetPath = "%WINDIR%\\system32\\cmd.exe";
lnk.Arguments = "/k prep.cmd cygwin.cmd";
lnk.WindowStyle = 1;
lnk.WorkingDirectory = "%USERPROFILE%\\" + name;
lnk.Save();

// Create build/src dir shortcut
lnk = shell.CreateShortcut(home + "\\" + name + "\\MumbleBuild - build+src dir.lnk");
lnk.Description = "Opens the build environment's build+src directory.";
lnk.TargetPath = "%USERPROFILE%\\" + name + ".build";
lnk.Arguments = "/k prep.cmd cygwin.cmd";
lnk.WindowStyle = 1;
lnk.Save();