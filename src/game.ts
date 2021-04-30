import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const wallcornerWhite = new Entity('wallcornerWhite')
engine.addEntity(wallcornerWhite)
wallcornerWhite.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(15.879403114318848, 0, 15.928133964538574),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallcornerWhite.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("models/WhiteCorner.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
wallcornerWhite.addComponentOrReplace(gltfShape)

const wallcornerWhite2 = new Entity('wallcornerWhite2')
engine.addEntity(wallcornerWhite2)
wallcornerWhite2.setParent(_scene)
wallcornerWhite2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(0.00038333237171173096, 0, 15.945171356201172),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
wallcornerWhite2.addComponentOrReplace(transform3)

const wallPlainWhite7 = new Entity('wallPlainWhite7')
engine.addEntity(wallPlainWhite7)
wallPlainWhite7.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(0.30014052987098694, 0, 12.015663146972656),
  rotation: new Quaternion(-7.781870092739773e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
wallPlainWhite7.addComponentOrReplace(transform4)
const gltfShape2 = new GLTFShape("models/PlainWhiteWall.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
wallPlainWhite7.addComponentOrReplace(gltfShape2)

const wallPlainWhite8 = new Entity('wallPlainWhite8')
engine.addEntity(wallPlainWhite8)
wallPlainWhite8.setParent(_scene)
wallPlainWhite8.addComponentOrReplace(gltfShape2)
const transform5 = new Transform({
  position: new Vector3(0.2993602454662323, 0, 10.023184776306152),
  rotation: new Quaternion(-7.781870092739773e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
wallPlainWhite8.addComponentOrReplace(transform5)

const wallPlainWhite9 = new Entity('wallPlainWhite9')
engine.addEntity(wallPlainWhite9)
wallPlainWhite9.setParent(_scene)
wallPlainWhite9.addComponentOrReplace(gltfShape2)
const transform6 = new Transform({
  position: new Vector3(0.3111717700958252, 0, 8.052734375),
  rotation: new Quaternion(-7.781870092739773e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.000007152557373, 1, 1.000007152557373)
})
wallPlainWhite9.addComponentOrReplace(transform6)

const wallPlainWhite10 = new Entity('wallPlainWhite10')
engine.addEntity(wallPlainWhite10)
wallPlainWhite10.setParent(_scene)
wallPlainWhite10.addComponentOrReplace(gltfShape2)
const transform7 = new Transform({
  position: new Vector3(0.3170070946216583, 0, 6.06872034072876),
  rotation: new Quaternion(-7.781870092739773e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000083446502686, 1, 1.0000083446502686)
})
wallPlainWhite10.addComponentOrReplace(transform7)

const wallPlainWhite11 = new Entity('wallPlainWhite11')
engine.addEntity(wallPlainWhite11)
wallPlainWhite11.setParent(_scene)
wallPlainWhite11.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(0.3126566708087921, 0, 4.117648601531982),
  rotation: new Quaternion(-7.781870092739773e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865)
})
wallPlainWhite11.addComponentOrReplace(transform8)

const wallcornerWhite3 = new Entity('wallcornerWhite3')
engine.addEntity(wallcornerWhite3)
wallcornerWhite3.setParent(_scene)
wallcornerWhite3.addComponentOrReplace(gltfShape)
const transform9 = new Transform({
  position: new Vector3(0.02037532441318035, 0, 0.13674497604370117),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
wallcornerWhite3.addComponentOrReplace(transform9)

const wallPlainWhite12 = new Entity('wallPlainWhite12')
engine.addEntity(wallPlainWhite12)
wallPlainWhite12.setParent(_scene)
wallPlainWhite12.addComponentOrReplace(gltfShape2)
const transform10 = new Transform({
  position: new Vector3(0.3093187212944031, 0, 2.728179931640625),
  rotation: new Quaternion(-7.781870092739773e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000052452087402, 1, 1.0000052452087402)
})
wallPlainWhite12.addComponentOrReplace(transform10)

const wallPlainWhite13 = new Entity('wallPlainWhite13')
engine.addEntity(wallPlainWhite13)
wallPlainWhite13.setParent(_scene)
wallPlainWhite13.addComponentOrReplace(gltfShape2)
const transform11 = new Transform({
  position: new Vector3(0.3196832537651062, 0, 1.5119199752807617),
  rotation: new Quaternion(-7.781870092739773e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000050067901611, 1, 1.0000050067901611)
})
wallPlainWhite13.addComponentOrReplace(transform11)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape3 = new GLTFShape("models/CityTile.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
entity.addComponentOrReplace(gltfShape3)
const transform12 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform12)

const wallPlainWhite14 = new Entity('wallPlainWhite14')
engine.addEntity(wallPlainWhite14)
wallPlainWhite14.setParent(_scene)
wallPlainWhite14.addComponentOrReplace(gltfShape2)
const transform13 = new Transform({
  position: new Vector3(15.919333457946777, 3.5762786865234375e-7, 5.976339340209961),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
wallPlainWhite14.addComponentOrReplace(transform13)

const wallPlainWhite15 = new Entity('wallPlainWhite15')
engine.addEntity(wallPlainWhite15)
wallPlainWhite15.setParent(_scene)
wallPlainWhite15.addComponentOrReplace(gltfShape2)
const transform14 = new Transform({
  position: new Vector3(15.919075012207031, 1.1920928955078125e-7, 3.987689971923828),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
wallPlainWhite15.addComponentOrReplace(transform14)

const wallcornerWhite4 = new Entity('wallcornerWhite4')
engine.addEntity(wallcornerWhite4)
wallcornerWhite4.setParent(_scene)
wallcornerWhite4.addComponentOrReplace(gltfShape)
const transform15 = new Transform({
  position: new Vector3(15.943046569824219, 0, 0.05472731217741966),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000057220458984, 1, 1.0000057220458984)
})
wallcornerWhite4.addComponentOrReplace(transform15)

const wallPlainWhite16 = new Entity('wallPlainWhite16')
engine.addEntity(wallPlainWhite16)
wallPlainWhite16.setParent(_scene)
wallPlainWhite16.addComponentOrReplace(gltfShape2)
const transform16 = new Transform({
  position: new Vector3(15.927604675292969, 0, 2.0010316371917725),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
wallPlainWhite16.addComponentOrReplace(transform16)

const wallPlainWhite17 = new Entity('wallPlainWhite17')
engine.addEntity(wallPlainWhite17)
wallPlainWhite17.setParent(_scene)
wallPlainWhite17.addComponentOrReplace(gltfShape2)
const transform17 = new Transform({
  position: new Vector3(15.919499397277832, 3.5762786865234375e-7, 7.953187465667725),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
wallPlainWhite17.addComponentOrReplace(transform17)

const wallPlainWhite18 = new Entity('wallPlainWhite18')
engine.addEntity(wallPlainWhite18)
wallPlainWhite18.setParent(_scene)
wallPlainWhite18.addComponentOrReplace(gltfShape2)
const transform18 = new Transform({
  position: new Vector3(15.90115737915039, 3.5762786865234375e-7, 9.95900821685791),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
wallPlainWhite18.addComponentOrReplace(transform18)

const wallPlainWhite19 = new Entity('wallPlainWhite19')
engine.addEntity(wallPlainWhite19)
wallPlainWhite19.setParent(_scene)
wallPlainWhite19.addComponentOrReplace(gltfShape2)
const transform19 = new Transform({
  position: new Vector3(15.880191802978516, 3.5762786865234375e-7, 11.94944953918457),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
wallPlainWhite19.addComponentOrReplace(transform19)

const wallPlainWhite20 = new Entity('wallPlainWhite20')
engine.addEntity(wallPlainWhite20)
wallPlainWhite20.setParent(_scene)
wallPlainWhite20.addComponentOrReplace(gltfShape2)
const transform20 = new Transform({
  position: new Vector3(3.933072328567505, 0, 0.4252021908760071),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainWhite20.addComponentOrReplace(transform20)

const wallPlainWhite21 = new Entity('wallPlainWhite21')
engine.addEntity(wallPlainWhite21)
wallPlainWhite21.setParent(_scene)
wallPlainWhite21.addComponentOrReplace(gltfShape2)
const transform21 = new Transform({
  position: new Vector3(6.736871242523193, 0, 0.390888512134552),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainWhite21.addComponentOrReplace(transform21)

const wallPlainWhite23 = new Entity('wallPlainWhite23')
engine.addEntity(wallPlainWhite23)
wallPlainWhite23.setParent(_scene)
wallPlainWhite23.addComponentOrReplace(gltfShape2)
const transform22 = new Transform({
  position: new Vector3(12.193881034851074, 0, 0.36854177713394165),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainWhite23.addComponentOrReplace(transform22)

const doorframeWhite = new Entity('doorframeWhite')
engine.addEntity(doorframeWhite)
doorframeWhite.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(9.614703178405762, 0, 0.37380677461624146),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4599494934082031, 1, 1)
})
doorframeWhite.addComponentOrReplace(transform23)
const gltfShape4 = new GLTFShape("models/WhiteDoorframe.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
doorframeWhite.addComponentOrReplace(gltfShape4)

const wallPlainWhite25 = new Entity('wallPlainWhite25')
engine.addEntity(wallPlainWhite25)
wallPlainWhite25.setParent(_scene)
wallPlainWhite25.addComponentOrReplace(gltfShape2)
const transform24 = new Transform({
  position: new Vector3(14.067061424255371, 0, 0.36802154779434204),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainWhite25.addComponentOrReplace(transform24)

const wallPlainWhite22 = new Entity('wallPlainWhite22')
engine.addEntity(wallPlainWhite22)
wallPlainWhite22.setParent(_scene)
wallPlainWhite22.addComponentOrReplace(gltfShape2)
const transform25 = new Transform({
  position: new Vector3(11.599082946777344, 0, 0.36751633882522583),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainWhite22.addComponentOrReplace(transform25)

const wallPlainWhite24 = new Entity('wallPlainWhite24')
engine.addEntity(wallPlainWhite24)
wallPlainWhite24.setParent(_scene)
wallPlainWhite24.addComponentOrReplace(gltfShape2)
const transform26 = new Transform({
  position: new Vector3(5.55684757232666, 0, 0.41067200899124146),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainWhite24.addComponentOrReplace(transform26)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(7.973996639251709, 0, 15.641855239868164),
  rotation: new Quaternion(2.2651532952393423e-15, -0.999995768070221, 1.192087779600115e-7, -0.0029303720220923424),
  scale: new Vector3(12.374763488769531, 3.94815993309021, 0.9186530709266663)
})
imageFromURL.addComponentOrReplace(transform27)

const imageFromURL6 = new Entity('imageFromURL6')
engine.addEntity(imageFromURL6)
imageFromURL6.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(15.651001930236816, 1.310826063156128, 8.026557922363281),
  rotation: new Quaternion(-8.698541324356993e-16, 0.7071065902709961, -8.429365294659874e-8, -0.7071070075035095),
  scale: new Vector3(1.333269715309143, 1.9133869409561157, 1.333269715309143)
})
imageFromURL6.addComponentOrReplace(transform28)

const imageFromURL7 = new Entity('imageFromURL7')
engine.addEntity(imageFromURL7)
imageFromURL7.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(0.44084107875823975, 0.7753527164459229, 7.676462650299072),
  rotation: new Quaternion(1.7863831683968996e-15, 0.70710688829422, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(11.181951522827148, 2.993051052093506, 1.000004529953003)
})
imageFromURL7.addComponentOrReplace(transform29)

const imageFromURL13 = new Entity('imageFromURL13')
engine.addEntity(imageFromURL13)
imageFromURL13.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(15.544532775878906, 1.0385932922363281, 7.185007095336914),
  rotation: new Quaternion(2.765140538619321e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.22017240524292, 2, 2.443639039993286)
})
imageFromURL13.addComponentOrReplace(transform30)

const floorPlainWhite = new Entity('floorPlainWhite')
engine.addEntity(floorPlainWhite)
floorPlainWhite.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.9476795196533203, 1, 3.9599785804748535)
})
floorPlainWhite.addComponentOrReplace(transform31)
const gltfShape5 = new GLTFShape("models/plainWhiteFloor_large.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
floorPlainWhite.addComponentOrReplace(gltfShape5)

const tableWithChairs = new Entity('tableWithChairs')
engine.addEntity(tableWithChairs)
tableWithChairs.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(4.320372581481934, 0, 9.906774520874023),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.1702117919921875, 1.1702117919921875, 1.1702117919921875)
})
tableWithChairs.addComponentOrReplace(transform32)
const gltfShape6 = new GLTFShape("models/Table_with_Chairs.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
tableWithChairs.addComponentOrReplace(gltfShape6)

const tableWithChairs2 = new Entity('tableWithChairs2')
engine.addEntity(tableWithChairs2)
tableWithChairs2.setParent(_scene)
tableWithChairs2.addComponentOrReplace(gltfShape6)
const transform33 = new Transform({
  position: new Vector3(12.006244659423828, 0, 10.167222023010254),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.1702117919921875, 1.1702117919921875, 1.1702117919921875)
})
tableWithChairs2.addComponentOrReplace(transform33)

const roofWhite = new Entity('roofWhite')
engine.addEntity(roofWhite)
roofWhite.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(15.943459510803223, 0, 15.974308967590332),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.9794137477874756, 1, 3.9733970165252686)
})
roofWhite.addComponentOrReplace(transform34)
const gltfShape7 = new GLTFShape("models/WhiteRoof.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
roofWhite.addComponentOrReplace(gltfShape7)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(8.158358573913574, 3.8752570152282715, 0.05562865734100342),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.292764902114868, 3.292764902114868, 7.843558311462402)
})
imageFromURL2.addComponentOrReplace(transform35)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(15.946972846984863, 0.28737902641296387, 7.838945388793945),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.7134130001068115, 3.612128257751465, 2.7134130001068115)
})
imageFromURL3.addComponentOrReplace(transform36)

const imageFromURL4 = new Entity('imageFromURL4')
engine.addEntity(imageFromURL4)
imageFromURL4.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(0.00829394068568945, 0.28737902641296387, 7.842214584350586),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.7134149074554443, 3.612128257751465, 2.7134149074554443)
})
imageFromURL4.addComponentOrReplace(transform37)

const imageFromURL5 = new Entity('imageFromURL5')
engine.addEntity(imageFromURL5)
imageFromURL5.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(2.0244758129119873, 2.9376416206359863, 0.04988864064216614),
  rotation: new Quaternion(8.824058054612925e-15, -0.9999909400939941, 1.1920818110411346e-7, -0.004262357950210571),
  scale: new Vector3(3.292769193649292, 0.9394310116767883, 7.843562602996826)
})
imageFromURL5.addComponentOrReplace(transform38)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
script1.init(options)
script1.spawn(imageFromURL, {"image":"https://i.imgur.com/EvCdejL.png"}, createChannel(channelId, imageFromURL, channelBus))
script1.spawn(imageFromURL6, {"image":"https://i.imgur.com/lXg02VL.png"}, createChannel(channelId, imageFromURL6, channelBus))
script1.spawn(imageFromURL7, {"image":"https://i.imgur.com/eycU2f3.jpg"}, createChannel(channelId, imageFromURL7, channelBus))
script1.spawn(imageFromURL13, {"image":"https://i.imgur.com/xdYfeeE.png"}, createChannel(channelId, imageFromURL13, channelBus))
script1.spawn(imageFromURL2, {"image":"https://i.imgur.com/0YNkLH3.jpg"}, createChannel(channelId, imageFromURL2, channelBus))
script1.spawn(imageFromURL3, {"image":"https://i.imgur.com/UKrO4Ys.jpg"}, createChannel(channelId, imageFromURL3, channelBus))
script1.spawn(imageFromURL4, {"image":"https://i.imgur.com/UKrO4Ys.jpg"}, createChannel(channelId, imageFromURL4, channelBus))
script1.spawn(imageFromURL5, {"image":"https://i.imgur.com/KUZjfvh.png"}, createChannel(channelId, imageFromURL5, channelBus))