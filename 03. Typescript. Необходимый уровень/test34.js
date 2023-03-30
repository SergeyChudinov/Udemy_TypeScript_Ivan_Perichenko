"use strict";
var TypesOfMedia;
(function (TypesOfMedia) {
    TypesOfMedia["VIDEO"] = "video";
    TypesOfMedia["AUDIO"] = "audio";
})(TypesOfMedia || (TypesOfMedia = {}));
var FormatsOfMedia;
(function (FormatsOfMedia) {
    FormatsOfMedia["MP4"] = ".mp4";
    FormatsOfMedia["MOV"] = ".mov";
    FormatsOfMedia["MKV"] = ".mkv";
    FormatsOfMedia["FLV"] = ".flv";
    FormatsOfMedia["WEBM"] = ".webM";
})(FormatsOfMedia || (FormatsOfMedia = {}));
function playMedia({ name, type, format, subtitles, marks } = {
    name: "example",
    type: TypesOfMedia.AUDIO,
    format: FormatsOfMedia.MKV,
}) {
    let marksLog;
    if (Array.isArray(marks)) {
        marksLog = marks.reduce((acc, string) => acc + string + ' ', '');
    }
    else if (typeof marks === 'string') {
        marksLog = marks;
    }
    else {
        marksLog = "Unsupported type of marks";
    }
    console.log(`Media ${name}${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles ?? "none"}`);
    return "Media started";
}
playMedia({
    name: "WoW",
    format: FormatsOfMedia.MKV,
    type: TypesOfMedia.VIDEO,
    subtitles: "hmhmhm hmhmhm doh",
    marks: ["4:30", "5:40"],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdDM0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVzdDM0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFLLFlBR0o7QUFIRCxXQUFLLFlBQVk7SUFDaEIsK0JBQWUsQ0FBQTtJQUNmLCtCQUFlLENBQUE7QUFDaEIsQ0FBQyxFQUhJLFlBQVksS0FBWixZQUFZLFFBR2hCO0FBQ0QsSUFBSyxjQU1KO0FBTkQsV0FBSyxjQUFjO0lBQ2xCLDhCQUFZLENBQUE7SUFDWiw4QkFBWSxDQUFBO0lBQ1osOEJBQVksQ0FBQTtJQUNaLDhCQUFZLENBQUE7SUFDWixnQ0FBYyxDQUFBO0FBQ2YsQ0FBQyxFQU5JLGNBQWMsS0FBZCxjQUFjLFFBTWxCO0FBUUQsU0FBUyxTQUFTLENBQ2pCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssS0FBWTtJQUNqRCxJQUFJLEVBQUUsU0FBUztJQUNmLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztJQUN4QixNQUFNLEVBQUUsY0FBYyxDQUFDLEdBQUc7Q0FDMUI7SUFFRCxJQUFJLFFBQWdCLENBQUM7SUFDckIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3pCLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUE7S0FDaEU7U0FBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUNyQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ2hCO1NBQU07UUFDUCxRQUFRLEdBQUcsMkJBQTJCLENBQUM7S0FDdkM7SUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxHQUFHLE1BQU0sT0FBTyxJQUFJO2FBQ3BDLFFBQVE7aUJBQ0osU0FBUyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkMsT0FBTyxlQUFlLENBQUM7QUFDeEIsQ0FBQztBQUNELFNBQVMsQ0FBQztJQUNSLElBQUksRUFBRSxLQUFLO0lBQ1gsTUFBTSxFQUFFLGNBQWMsQ0FBQyxHQUFHO0lBQzFCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztJQUN4QixTQUFTLEVBQUUsbUJBQW1CO0lBQzlCLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7Q0FDeEIsQ0FBQyxDQUFDIn0=