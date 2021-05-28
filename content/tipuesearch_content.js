var tipuesearch = {"pages": [{'title': 'About', 'text': '倉儲: https://github.com/40823220/cd2021 \n 同組組員: 40823204 \n 兩人: 分組倉儲 、 分組網站 \n 新增組員: 40823228 、 40823242 \n 四人: 分組倉儲 、 分組網站 \n 新增組員: 40823205 、 40823237 、 40823221 、 40832244 、 40823250 \n 八人: 分組倉儲 、 分組網站 \n', 'tags': '', 'url': 'About.html'}, {'title': 'WORKS', 'text': '', 'tags': '', 'url': 'WORKS.html'}, {'title': 'stage1', 'text': '', 'tags': '', 'url': 'stage1.html'}, {'title': '1', 'text': '1.建立網站、倉儲 \n 2.修正leo bug \n 3.拍過程影片 \n 4.跟組員溝通、協同 \n', 'tags': '', 'url': '1.html'}, {'title': '2~3', 'text': '舊版 40823220設計 \n 新版 40823204修改 \n 內有新版零件載點 \n 參與組員討論的畫面 \n \n \n 舊版 \n 小組題目:升降裝置 \n 動機:大型可用來載人，小型可用在各種自動化機械 \n 我個人負責的是繪圖的部分，包括(零件檔、組合檔) \n 舊底板 \n \n 無驅動依據的升降裝置之組合圖 \n \n 後來新增了驅動輪但尺寸過，導致無法達到預期的升降高度 \n \n 最新版 \n 此版本新增了蘇格蘭軛機構做為驅動整體的依據 \n 零件及組合之檔案載點 : /downloads/升降裝置(1).zip \n 升降裝置組合圖 \n \n 蘇格蘭軛的旋轉係數-(它會直接影響，裝置上升及下降的高度) \n \n 底板 \n \n 上蓋 \n \n 驅動輪 \n \n 蘇格蘭軛之滑塊 \n \n 所有桿件 \n \xa0 \n \xa0 \n', 'tags': '', 'url': '2~3.html'}, {'title': '4', 'text': '1.本週進度主要是用CoppsliaSim做模擬 \n \n 2.解決小組網站合併衝突的問題、新增協同者 \n 3.本人本次分工的工作是做要上台報告的簡報 \n', 'tags': '', 'url': '4.html'}, {'title': '5', 'text': '上台報告2人一組的成果 \n', 'tags': '', 'url': '5.html'}, {'title': 'stage2', 'text': '', 'tags': '', 'url': 'stage2.html'}, {'title': '6~7', 'text': '四人小組運作模式 :四人討論出 兩種 主題，再由兩人小組分別畫出設計圖，最後四人一起選出一個適當主題，並一起修改、更新、模擬。 \n 方案1:省力搬運機 \n 動機: 主要用於工地裝水泥的箱子的搬運，主要目的是安全、省時、省力 \n 優點:操作簡單，使用方便，成本低 \n 缺點:雖然橘色大型塑膠箱使用很廣泛，但本裝置只適用於一種尺寸的箱子，而且箱子兩側必須有"耳朵" \n 設計者: 40823220、40823204 \n 圖檔載點: 搬運機.zip \n 搬運圖: \n \n 實體:四連桿機構的運用 \n \n \n 大眾通用大型塑膠箱: \n \n', 'tags': '', 'url': '6~7.html'}, {'title': '8', 'text': '1.完整出圖 \n 把整零件圖、拆解圖完整呈現給大家 \n \n \n 2.程式模擬 \n 總共有70幾個零件含標準件，螺絲可以當旋轉軸，運用平行四連桿機構來抬箱子 \n Coppeliasim-未完全模擬成功 \n Solidwork-在小組網站有完整模擬影片 \n inventor2017-正在嘗試 \n', 'tags': '', 'url': '8.html'}, {'title': '9', 'text': '1.個人成功做出inventor模擬動畫 \n 2.報告 \n 3.herokuapp-網址 \n \n', 'tags': '', 'url': '9.html'}, {'title': 'stage3', 'text': '', 'tags': '', 'url': 'stage3.html'}, {'title': '10', 'text': '1. stage3主題:無障礙越野車 \n 2.動機:想要一台可以克服各種障礙地形的車子 \n 3.繪圖者:40823220 \n 4.機構:利用萬向接頭帶動蝸桿蝸輪 \n 5.想法:前後輪用雙向馬達驅動，萬象接頭用單向馬達，材料採中空鋁件設計使整體更輕，上面設置供電器 \n \n \n \n \n', 'tags': '', 'url': '10.html'}, {'title': '10-task1', 'text': 'def stu2b(account):\n    if account == "40823231":\n        return account + "-2"\n    elif account[0:3] == "407":\n        return "s" + account\n    else:\n        return account\n  \nteamb = []\n  \n# open file, default is read mode, since txt content no chinese char\n# no encoding = "UTF-8" is needed\nwith open("stage3_2b.txt") as fh:\n    # readlines will read into the whole line and put into list format\n    # has \\n at the end of each line\n    data = fh.readlines()\n#print(len(data))\nfor i in range(len(data)):\n    group = data[i].rstrip("\\n").split("\\t")\n    teamb.append(group)\n      \noutput = ""    \nseperator = "-"*10 + "<br />"\n  \nfor i in teamb[0:]:\n    team = i[0]\n    leader = stu2b(i[1])\n    m1 = stu2b(i[3])\n    m2 = stu2b(i[5])\n    m3 = stu2b(i[7])\n    m4 = stu2b(i[9])\n    m5 = stu2b(i[11])\n    m6 = stu2b(i[13])\n      \n    try:\n        m7 = stu2b(i[15])\n    except:\n        m7 = ""\n    try:\n        m8 = stu2b(i[17])\n    except:\n        m8 = ""\n          \n    leaderrepo = "<a href=\'http://github.com/" + leader + "/cd2021\'>" + leader + " repo</a>"\n    leadersite = "<a href=\'http://" + leader + ".github.io/cd2021\'>" + leader +  " site</a>"\n    m1repo = "<a href=\'http://github.com/" + m1 + "/cd2021\'>" + m1 + " repo</a>"\n    m1site = "<a href=\'http://" + m1 + ".github.io/cd2021\'>" + m1 +  " site</a>"\n    m2repo = "<a href=\'http://github.com/" + m2 + "/cd2021\'>" + m2 + " repo</a>"\n    m2site = "<a href=\'http://" + m2 + ".github.io/cd2021\'>" + m2 +  " site</a>"\n    m3repo = "<a href=\'http://github.com/" + m3 + "/cd2021\'>" + m3 + " repo</a>"\n    m3site = "<a href=\'http://" + m3 + ".github.io/cd2021\'>" + m3 +  " site</a>"\n    m4repo = "<a href=\'http://github.com/" + m4 + "/cd2021\'>" + m4 + " repo</a>"\n    m4site = "<a href=\'http://" + m4 + ".github.io/cd2021\'>" + m4 +  " site</a>"\n    m5repo = "<a href=\'http://github.com/" + m5 + "/cd2021\'>" + m5 + " repo</a>"\n    m5site = "<a href=\'http://" + m5 + ".github.io/cd2021\'>" + m5 +  " site</a>"\n    m6repo = "<a href=\'http://github.com/" + m6 + "/cd2021\'>" + m6 + " repo</a>"\n    m6site = "<a href=\'http://" + m6 + ".github.io/cd2021\'>" + m6 +  " site</a>"\n   \n  \n    teamrepo = "<a href=\'http://github.com/" + leader + "/" + team + "\'>" + team + " repo</a>"\n    teamsite =  "<a href=\'http://" + m1 + ".github.io/" + team + "\'>" + team +  " site</a>"\n  \n    output += teamrepo + " | " + teamsite + " | " +leaderrepo + " | " + leadersite + " | " +m1repo + " | " + m1site + " | " +m2repo + " | " + m2site + " | " +m3repo + " | " + m3site + " | " +m4repo + " | " + m4site + " | " +m5repo + " | " + m5site + " | " +m6repo + " | " + m6site \n      \n    if m7 != "":\n       m7repo = "<a href=\'http://github.com/" + m7 + "/cd2021\'>" + m7 + " repo</a>"\n       m7site = "<a href=\'http://" + m7 + ".github.io/cd2021\'>" + m7 +  " site</a>"  \n       output += " |  " + m7repo + "| " + m7site\n    else:\n        output += "" \n      \n    if m8 != "":\n       m8repo = "<a href=\'http://github.com/" + m8 + "/cd2021\'>" + m8 + " repo</a>"\n       m8site = "<a href=\'http://" + m8 + ".github.io/cd2021\'>" + m8 +  " site</a>"  \n       output += " |  " + m8repo + "| " + m8site + "<br />" + seperator\n    else:\n        output += "<br />" + seperator\n  \n  \nprint(output)\n# the following will use group data to generate needed html \n 結果: \n stage3-bg1 repo  |  stage3-bg1 site  |  40823245 repo  |  40823245 site  |  40823251 repo  |  40823251 site  |  40823208 repo  |  40823208 site  |  40823213 repo  |  40823213 site  |  40823232 repo  |  40823232 site  |  40823234 repo  |  40823234 site  |  40823235 repo  |  40823235 site  |\xa0  40823246 repo |  40823246 site ---------- stage3-bg2 repo  |  stage3-bg2 site  |  40823217 repo  |  40823217 site  |  40823201 repo  |  40823201 site  |  40823209 repo  |  40823209 site  |  40823210 repo  |  40823210 site  |  40823206 repo  |  40823206 site  |  40823207 repo  |  40823207 site  |  40823223 repo  |  40823223 site  |\xa0  40823224 repo |  40823224 site ---------- stage3-bg3 repo  |  stage3-bg3 site  |  40823236 repo  |  40823236 site  |  40823202 repo  |  40823202 site  |  40823203 repo  |  40823203 site  |  40823212 repo  |  40823212 site  |  40823219 repo  |  40823219 site  |  40823222 repo  |  40823222 site  |  40823231-2 repo  |  40823231-2 site  |\xa0  40823244 repo |  40823244 site ---------- stage3-bg4 repo  |  stage3-bg4 site  |  40823239 repo  |  40823239 site  |  s40723140 repo  |  s40723140 site  |  s40723128 repo  |  s40723128 site  |  s40723139 repo  |  s40723139 site  |  s40723106 repo  |  s40723106 site  |  s40723135 repo  |  s40723135 site  |  s40723143 repo  |  s40723143 site  |\xa0  s40723215 repo |  s40723215 site ---------- stage3-bg5 repo  |  stage3-bg5 site  |  40823221 repo  |  40823221 site  |  40823204 repo  |  40823204 site  |  40823205 repo  |  40823205 site  |  40823220 repo  |  40823220 site  |  40823228 repo  |  40823228 site  |  40823237 repo  |  40823237 site  |  40823242 repo  |  40823242 site  |\xa0  40823250 repo |  40823250 site  |\xa0  40832244 repo |  40832244 site ---------- stage3-bg6 repo  |  stage3-bg6 site  |  40823225 repo  |  40823225 site  |  40823214 repo  |  40823214 site  |  40823218 repo  |  40823218 site  |  40823211 repo  |  40823211 site  |  40823248 repo  |  40823248 site  |  40823247 repo  |  40823247 site  |  40823216 repo  |  40823216 site  |\xa0  40823238 repo |  40823238 site ---------- stage3-bg7 repo  |  stage3-bg7 site  |  40623144 repo  |  40623144 site  |  40823233 repo  |  40823233 site  |  s40723224 repo  |  s40723224 site  |  40823241 repo  |  40823241 site  |  40423155 repo  |  40423155 site  |  40823227 repo  |  40823227 site  |  s40723233 repo  |  s40723233 site ---------- \n', 'tags': '', 'url': '10-task1.html'}, {'title': '10~11 task2', 'text': '(更新)升降梯後來有成功做出來，成果影片在w14 \n (更新)搬運機有成功做出來，成果影片在w15 \n 1.利用api來控制我們stage1的產品，但是因為我們之前沒有成功模擬出來，所以也沒有達到完全控制 \n 2.stage2的產品還在測試中 \n 3.錄製影片，放在每周影片區，順便秀一下stage3的產品 \n 升降梯程式: \n \n 程式: \n # File created by Thibaut Royer, Epitech school\n# thibaut1.royer@epitech.eu\n# It intends to be an example program for the "Two wheels, one arm" educative project.\n\nimport sim as vrep\nimport math\nimport random\nimport time\n#import keyboard\n\n\nprint (\'Start\')\n\n# Close eventual old connections\nvrep.simxFinish(-1)\n# Connect to V-REP remote server\nclientID = vrep.simxStart(\'127.0.0.1\', 19997, True, True, 5000, 5)\n\nif clientID != -1:\n    print (\'Connected to remote API server\')\n    \n    res = vrep.simxAddStatusbarMessage(\n        clientID, "40823220",\n        vrep.simx_opmode_oneshot)\n    if res not in (vrep.simx_return_ok, vrep.simx_return_novalue_flag):\n        print("Could not add a message to the status bar.")\n\n    \n    opmode = vrep.simx_opmode_oneshot_wait\n    \n\n    \n    vrep.simxStartSimulation(clientID, opmode)\n    ret,front_handle=vrep.simxGetObjectHandle(clientID,"joint0",opmode)\n    ret,left_handle=vrep.simxGetObjectHandle(clientID,"joint",opmode)\n    ret,right_handle=vrep.simxGetObjectHandle(clientID,"joint2",opmode)\n    vrep.simxSetJointTargetVelocity(clientID,left_handle,10,opmode)\n    #vrep.simxGetObjectHandle(clientID, "main", opmode)\n\n        \n        \nelse:\n    print (\'Failed connecting to remote API server\')\n    print (\'End\') \n 搬運機程式: \n \n import sim as vrep\nimport math\nimport random\nimport time\nimport keyboard\n  \nprint (\'Start\')\n  \n# Close eventual old connections\nvrep.simxFinish(-1)\n# Connect to V-REP remote server\nclientID = vrep.simxStart(\'192.168.50.217\', 19997, True, True, 5000, 5)\n   \nif clientID !=-1:\n    print (\'Connected to remote API server\')\n    \n    res = vrep.simxAddStatusbarMessage(\n        clientID, "40823204",\n        vrep.simx_opmode_oneshot)\n           \n    if res not in (vrep.simx_return_ok, vrep.simx_return_novalue_flag):\n        print("Could not add a message to the status bar.")\n           \n    opmode = vrep.simx_opmode_oneshot_wait\n    STREAMING = vrep.simx_opmode_streaming\n      \n    vrep.simxStartSimulation(clientID, opmode)\n     \n     \n    ret,fwheel_handle=vrep.simxGetObjectHandle(clientID,"joint0",opmode)\n    ret,bwheel_handle=vrep.simxGetObjectHandle(clientID,"joint2",opmode)\n    ret,pole1_handle=vrep.simxGetObjectHandle(clientID,"joint3",opmode)\n    ret,pole2_handle=vrep.simxGetObjectHandle(clientID,"joint4",opmode)\n    ds=0\n    dy=0\n    df=0\n    db=0\n    vrep.simxSetJointTargetPosition(clientID,fwheel_handle,df,opmode)\n    vrep.simxSetJointTargetPosition(clientID,bwheel_handle,db,opmode)\n    vrep.simxSetJointTargetPosition(clientID,pole1_handle,ds,opmode)\n    vrep.simxSetJointTargetPosition(clientID,pole2_handle,dy,opmode)\n     \n     \n    while True:\n        #Clockwise\n        if keyboard.is_pressed("2"):\n            ds=ds-0.01\n            dy=dy-0.01\n            vrep.simxSetJointTargetPosition(clientID,pole1_handle,ds,opmode)\n            vrep.simxSetJointTargetPosition(clientID,pole2_handle,dy,opmode)\n            print("up")\n        if keyboard.is_pressed("4"):\n            ds=ds+0.01\n            dy=dy+0.01\n            vrep.simxSetJointTargetPosition(clientID,pole1_handle,ds,opmode)\n            vrep.simxSetJointTargetPosition(clientID,pole2_handle,dy,opmode)\n            print("down")\n        if keyboard.is_pressed("6"):\n            df=df+0.2\n            db=db+0.2\n            vrep.simxSetJointTargetPosition(clientID,fwheel_handle,df,opmode)\n            vrep.simxSetJointTargetPosition(clientID,bwheel_handle,db,opmode)\n            print("left")\n        if keyboard.is_pressed("8"):\n            df=df-0.2\n            db=db-0.2\n            vrep.simxSetJointTargetPosition(clientID,fwheel_handle,df,opmode)\n            vrep.simxSetJointTargetPosition(clientID,bwheel_handle,db,opmode)\n            print("right")\n \n \n              \nelse:\n    print (\'Failed connecting to  remote API server\')\n    print (\'End\') \n \n', 'tags': '', 'url': '10~11 task2.html'}, {'title': '12', 'text': '本週主要為零件、產品大改良 \n 零件檔載點: 零件檔 \n 更進如下: \n 1.輪胎加大，紋路朝前，為了讓摩擦力增加 \n \n 2.將單向馬達架高，直接驅動蝸桿蝸輪，省略多餘的萬象接頭，使模擬更容易 \n \n 3.輪軸加大，使模擬安插軸更容易 \n 4.更改底板，因應前面所有改動，底板必須符合邏輯的變化 \n \n 5.將不動零件合併化，原本14件縮減到6件，使模擬大幅度容易 \n \n', 'tags': '', 'url': '12.html'}, {'title': '13', 'text': '各組員的模擬檔: \n 28、42- 2842模擬 \n 控制方式: \n QA上下 Z停止 WS後輪正反轉 X停止 ED前輪正反轉 C停止 \n 前正後反 左轉 前反後正 右轉 \n 37- 37模擬 \n 控制方式: \n 上下控制角度 左右控制前後 \n 4- 04模擬 \n 控制方式: \n 同上37 \n 進度: coppelia模擬+lua控制 \n 成果: 他可以用方件來控制動作 \n 接下來就會讓產品來攀爬各種地形 \n \n', 'tags': '', 'url': '13.html'}, {'title': '14~15 機械手臂控制', 'text': '參考組員28號的程式: \n # KMOLab Portable RoboDK pick and place\nfrom robolink import *    # API to communicate with robodk\nfrom robodk import *      # robodk robotics toolbox\n \n# Setup global parameters\nBALL_DIAMETER = 100 # diameter of one ball\nAPPROACH = 100      # approach distance to grab each part, in mm\nnTCPs = 6           # number of TCP\'s in the tool\n \n#----------------------------------------------\n# Function definitions\n \ndef box_calc(BALLS_SIDE=4, BALLS_MAX=None):\n    """Calculate a list of points (ball center) as if the balls were stored in a box"""\n    if BALLS_MAX is None: BALLS_MAX = BALLS_SIDE**3\n    xyz_list = []\n    for h in range(BALLS_SIDE):\n        for i in range(BALLS_SIDE):\n            for j in range(BALLS_SIDE):\n                xyz_list = xyz_list + [[(i+0.5)*BALL_DIAMETER, (j+0.5)*BALL_DIAMETER, (h+0.5)*BALL_DIAMETER]]\n                if len(xyz_list) >= BALLS_MAX:\n                    return xyz_list\n    return xyz_list\n \ndef pyramid_calc(BALLS_SIDE=4):\n    """Calculate a list of points (ball center) as if the balls were place in a pyramid"""\n    #the number of balls can be calculated as: int(BALLS_SIDE*(BALLS_SIDE+1)*(2*BALLS_SIDE+1)/6)\n    BALL_DIAMETER = 100\n    xyz_list = []\n    sqrt2 = 2**(0.5)\n    for h in range(BALLS_SIDE):\n        for i in range(BALLS_SIDE-h):\n            for j in range(BALLS_SIDE-h):\n                height = h*BALL_DIAMETER/sqrt2 + BALL_DIAMETER/2\n                xyz_list = xyz_list + [[i*BALL_DIAMETER + (h+1)*BALL_DIAMETER*0.5, j*BALL_DIAMETER + (h+1)*BALL_DIAMETER*0.5, height]]\n    return xyz_list\n \ndef balls_setup(frame, positions):\n    """Place a list of balls in a reference frame. The reference object (ball) must have been previously copied to the clipboard."""\n    nballs = len(positions)\n    step = 1.0/(nballs - 1)\n    for i in range(nballs):\n        newball = frame.Paste()\n        newball.setName(\'ball \' + str(i)) #set item name\n        newball.setPose(transl(positions[i])) #set item position with respect to parent\n        newball.setVisible(True, False) #make item visible but hide the reference frame\n        newball.Recolor([1-step*i, step*i, 0.2, 1]) #set RGBA color\n \ndef cleanup_balls(parentnodes):\n    """Delete all child items whose name starts with \\"ball\\", from the provided list of parent items."""\n    todelete = []\n    for item in parentnodes:\n        todelete = todelete + item.Childs()\n \n    for item in todelete:\n        if item.Name().startswith(\'ball\'):\n            item.Delete()\n \ndef TCP_On(toolitem, tcp_id):\n    """Attach the closest object to the toolitem Htool pose,\n    furthermore, it will output appropriate function calls on the generated robot program (call to TCP_On)"""\n    toolitem.AttachClosest()\n    toolitem.RDK().RunMessage(\'Set air valve %i on\' % (tcp_id+1))\n    toolitem.RDK().RunProgram(\'TCP_On(%i)\' % (tcp_id+1));\n         \ndef TCP_Off(toolitem, tcp_id, itemleave=0):\n    """Detaches the closest object attached to the toolitem Htool pose,\n    furthermore, it will output appropriate function calls on the generated robot program (call to TCP_Off)"""\n    toolitem.DetachAll(itemleave)\n    toolitem.RDK().RunMessage(\'Set air valve %i off\' % (tcp_id+1))\n    toolitem.RDK().RunProgram(\'TCP_Off(%i)\' % (tcp_id+1));\n \n \n#----------------------------------------------------------\n# The program starts here:\n \n# Any interaction with RoboDK must be done through RDK:\nRDK = Robolink()\n \n# Turn off automatic rendering (faster)\nRDK.Render(False)\n \n#RDK.Set_Simulation_Speed(500); # set the simulation speed\n \n# Gather required items from the station tree\nrobot = RDK.Item(\'Fanuc M-710iC/50\')\nrobot_tools = robot.Childs()\n#robottool = RDK.Item(\'MainTool\')\nframe1 = RDK.Item(\'Table 1\')\nframe2 = RDK.Item(\'Table 2\')\n \n# Copy a ball as an object (same as CTRL+C)\nballref = RDK.Item(\'reference ball\')\nballref.Copy()\n \n# Run a pre-defined station program (in RoboDK) to replace the two tables\nprog_reset = RDK.Item(\'Replace objects\')\nprog_reset.RunProgram()\n \n# Call custom procedure to remove old objects\ncleanup_balls([frame1, frame2])\n \n# Make a list of positions to place the objects\nframe1_list = pyramid_calc(4)\nframe2_list = pyramid_calc(4)\n \n# Programmatically place the objects with a custom-made procedure\nballs_setup(frame1, frame1_list)\n \n# Delete previously generated tools\nfor tool in robot_tools:\n    if tool.Name().startswith(\'TCP\'):\n        tool.Delete()\n         \n# Calculate tool frames for the suction cup tool of 6 suction cups\nTCP_list = []\nfor i in range(nTCPs):\n    TCPi_pose = transl(0,0,100)*rotz((360/nTCPs)*i*pi/180)*transl(125,0,0)*roty(pi/2)\n    TCPi = robot.AddTool(TCPi_pose, \'TCP %i\' % (i+1))\n    TCP_list.append(TCPi)\n \nTCP_0 = TCP_list[0]\n \n# Turn on automatic rendering\nRDK.Render(True)\n \n# Move balls    \nrobot.setPoseTool(TCP_list[0])\nnballs_frame1 = len(frame1_list)\nnballs_frame2 = len(frame2_list)\nidTake = nballs_frame1 - 1\nidLeave = 0\nidTCP = 0\ntarget_app_frame = transl(2*BALL_DIAMETER, 2*BALL_DIAMETER, 4*BALL_DIAMETER)*roty(pi)*transl(0,0,-APPROACH)\n \nwhile idTake >= 0:\n    # ------------------------------------------------------------------\n    # first priority: grab as many balls as possible\n    # the tool is empty at this point, so take as many balls as possible (up to a maximum of 6 -> nTCPs)\n    ntake = min(nTCPs, idTake + 1)\n \n    # approach to frame 1\n    robot.setPoseFrame(frame1)\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.MoveJ(target_app_frame)\n \n    # grab ntake balls from frame 1\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        # calculate target wrt frame1: rotation about Y is needed since Z and X axis are inverted\n        target = transl(frame1_list[idTake])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idTake = idTake - 1       \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_On(TCPi, i)\n        robot.MoveL(target_app)\n  \n    # ------------------------------------------------------------------\n    # second priority: unload the tool     \n    # approach to frame 2 and place the tool balls into table 2\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ(target_app_frame)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.setPoseFrame(frame2)    \n    robot.MoveJ(target_app_frame)\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        if idLeave > nballs_frame2-1:\n            raise Exception("No room left to place objects in Table 2")\n         \n        # calculate target wrt frame1: rotation of 180 about Y is needed since Z and X axis are inverted\n        target = transl(frame2_list[idLeave])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idLeave = idLeave + 1       \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_Off(TCPi, i, frame2)\n        robot.MoveL(target_app)\n \n    robot.MoveJ(target_app_frame)\n \n# Move home when the robot finishes\nrobot.MoveJ([0,0,0,0,10,-200])\n \n', 'tags': '', 'url': '14~15 機械手臂控制.html'}, {'title': '筆記', 'text': '', 'tags': '', 'url': '筆記.html'}, {'title': 'SSH', 'text': '目前已成功啟用ssh \n \n \n', 'tags': '', 'url': 'SSH.html'}, {'title': '協同push遇到的問題', 'text': '問題:當另一位組員更新了網站的東西，原本的組員會沒跟上，如果沒有git pull，則會將原本的資料直接覆蓋 \n 解決方法: \n \n', 'tags': '', 'url': '協同push遇到的問題.html'}, {'title': '推送內容給小組的步驟', 'text': '要記得push兩次 \n \n', 'tags': '', 'url': '推送內容給小組的步驟.html'}, {'title': 'task1亂數分組 操作步驟', 'text': '\n', 'tags': '', 'url': 'task1亂數分組 操作步驟.html'}, {'title': '每週影片區', 'text': '', 'tags': '', 'url': '每週影片區.html'}, {'title': 'w1', 'text': '內有與組員的對話內容 \n \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2~w3', 'text': '升降機構參考資料 \n \n w2設計機構 \n \n w3程式模擬 \n \n', 'tags': '', 'url': 'w2~w3.html'}, {'title': 'w4', 'text': '內含簡報內容 \n \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w6~w7', 'text': '討論的畫面 \n \n 實體影片介紹 \n \n 參考影片 \n \n', 'tags': '', 'url': 'w6~w7.html'}, {'title': 'w8', 'text': '程式模擬影片 \n Coppeliasim: \n \n Solidwork: \n \n inventor2017: \n \n', 'tags': '', 'url': 'w8.html'}, {'title': 'w9', 'text': '報告影片 \n \n', 'tags': '', 'url': 'w9.html'}, {'title': 'w10', 'text': '討論影片 \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': 'task2、stage3主題 \n \n stage3 主題參考資料 \n \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w12~w13', 'text': '本週進度是模擬，成果不錯，有成功，接下來會往攀爬障礙物的情況去模擬 \n 組員1的模擬: \n \n \n 組員2的模擬: \n \n', 'tags': '', 'url': 'w12~w13.html'}, {'title': 'w13', 'text': '融入實境模擬 \n \n 13週直播影片 \n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w14', 'text': 'task2升降梯用PY控制 \n \n \n', 'tags': '', 'url': 'w14.html'}, {'title': 'w15', 'text': 'task2搬運機Python模擬 \n \n 參考組員28號機械手臂操作: \n', 'tags': '', 'url': 'w15.html'}, {'title': 'w5', 'text': '上台報告影片(另外放，故沒在影片區) \n \n \n \n AG \n \n \n BG \n \n \n \n 1 \n 03:40 \n \n 1 \n 07:14 \n \n \n 2 \n 03:04 \n \n 2 \n 01:55 \n \n \n 3 \n 02:24 \n \n 3 \n 01:58 \n \n \n 4 \n 03:19 \n \n 4 \n 02:51 \n \n \n 5 \n 03:38 \n \n 5 \n 03:00 \n \n \n 6 \n 05:50 \n \n 6 \n 03:07 \n \n \n 7 \n 02:26 \n \n 7 \n 02:47 \n \n \n 8 \n 01:33 \n \n 8 \n 03:25 \n \n \n 9 \n 01:18 \n \n 9 \n 02:43 \n \n \n 10 \n 03:08 \n \n 10 \n 02:20 \n \n \n 11 \n 01:04 \n \n 11 \n 01:38 \n \n \n 12 \n 01:59 \n \n 12 \n 01:47 \n \n \n 13 \n 02:17 \n \n 13 \n 02:09 \n \n \n 14 \n 02:31 \n \n 14 \n 05:58 \n \n \n 15 \n 00:50 \n \n 15 \n 03:24 \n \n \n 16 \n 01:09 \n \n 16 \n 03:33 \n \n \n 17 \n 02:31 \n \n 17 \n 04:33 \n \n \n 18 \n 01:57 \n \n 18 \n 05:03 \n \n \n 19 \n 02:19 \n \n 19 \n 03:11 \n \n \n 20 \n 04:06 \n \n 20 \n 03:32 \n \n \n 21 \n 02:20 \n \n 21 \n 05:02 \n \n \n 22 \n 05:13 \n \n 22 \n 04:47 \n \n \n 23 \n 08:19 \n \n 23 \n 02:55 \n \n \n \n \n \n 24 \n 05:00 \n \n \n \n \n \n 25 \n 04:53 \n \n \n \n \n \n 26 \n \n \n \n \n \n \n 27 \n 03:43 \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w5.html'}]};