/*

Sample input:
Meetings person 1: [[“9:00”, “10:30”], [“12:00”, “13:00”], [“16:00”, “18:00”]]
Bounds person 1: [“9:00”, “20:00”] 
Meetings person 2: [[“10:00”, “11:30”], [“12:30”, “14:30”], [“14:30”, “15:00”], [“16:00”, “17:00”]]
Bounds person 2: [“10:00”, “18:30”]
Time period 30 can schedule a meeting
Sample output [["11;30", "12:00"], [“15:00”, “16:00”], [“18:00”, “18:30”]]

person 1 = [[540,630], [720, 780]]
[90]
person 2 = [[600,690],[750, 870]]


timeline = startTime // 600
indexP1 = -1 // 0 => 540, 630
indexP2 = -1 // 0 => 600, 690
isStartOfPossibleBlock = true
take Max[630, 690 = 690
possibleBlock = [690, _]]
isStartOfPossibleBlock = false
timeline = 690
check of start of next possible blocks or endtime
[720, 780]
[750, 870]
tame min 720, 750 => 720
possibleBlock[690, 720]
isStartOfPossibleBlock => true
timeline = 720


a-----c       e----f     g---i     j----------n    p-----------r
===================================================================
----b       d---------------h       k-----l m---o       q---------s

[[c, d], [i.j], [o, p]]
*/

function findMeetingTime(meetingsP1, boundsP1, meetingsP2, boundsp2){
    //convert to minutes
    
    
    let startTime = Math.max(boundsP1[0], boundsp2[0]);
    let endTime = Math.min(boundsP1[1], boundsp2[1]);
    let timePeriods = [];
    let countMeetingsP1 = 0;
    let countMeetingsP2 = 0;
    
    for (let i = startTime; i < endTime; i++){ //600
      
      // get gaps
      let startP1 = 0;
      let endP1 = 0;
      let startP2 = 0;
      let endP2 = 0;
      
  
      if (meetingsP1[countMeetingsP1]){
        startP1 = meetingsP1[countMeetingsP1][0];
        endP1 = meetingsP1[countMeetingsP1][1];
      }
      
      if (meetingsP1[countMeetingsP2]){
        startP2 = meetingsP1[countMeetingsP2][0];
        endP2 = meetingsP1[countMeetingsP2][1];
      }
      
      
      if (i > startP1 && i < endP1){
        i = endP1;
      }
      
      if (i > startP2 && i < endP2){
        i = endP2;
      }
      
      if meetingsp1.length 
        if i in 540 - 630 or i in 600 - 690
        then
        take the higher end time
        
        
    }
  }