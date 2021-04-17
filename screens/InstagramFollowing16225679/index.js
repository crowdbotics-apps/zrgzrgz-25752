import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_0_1478}>
        <View style={styles.View_0_1477} />
        <View style={styles.View_0_1479}>
          <Text style={styles.Text_0_1479}>karennne liked 3 posts. 3h</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2dc/ef2f/f17fa226a200109154a7978ad79f2852"
          }}
          style={styles.ImageBackground_0_1480}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c3f/fd39/3d0b6cd7a9359f4b2a0128d8e1983f33"
          }}
          style={styles.ImageBackground_0_1481}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eed8/c347/e8995d17af7479bf8f97f7b33e57d70c"
          }}
          style={styles.ImageBackground_0_1482}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3bc/1fe6/2d877f223b110cf133a7a44b51d7d446"
          }}
          style={styles.ImageBackground_0_1483}
        />
      </View>
      <View style={styles.View_0_1485}>
        <View style={styles.View_0_1484} />
        <View style={styles.View_0_1486}>
          <Text style={styles.Text_0_1486}>maxjacobson liked 3 posts. 3h</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dffa/0039/fc34f337afecfd5c4e1a4852e078cace"
          }}
          style={styles.ImageBackground_0_1487}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eab/734a/a4900aaf38de398587dc2d425a1ef7cc"
          }}
          style={styles.ImageBackground_0_1488}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a22/8b0f/2fd27339ca2b7afdfb034297a36ffb78"
          }}
          style={styles.ImageBackground_0_1489}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e73/1a88/46fb2d97560b7b80a014cc0f7782543f"
          }}
          style={styles.ImageBackground_0_1490}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c95/2693/edd8d37c7c247cab6212b9178a0db322"
          }}
          style={styles.ImageBackground_0_1491}
        />
      </View>
      <View style={styles.View_0_1493}>
        <View style={styles.View_0_1492} />
        <View style={styles.View_0_1494}>
          <Text style={styles.Text_0_1494}>craig_love liked 8 posts. 3h</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97fd/b9f7/4754dd54981b15f429673cc3c742130a"
          }}
          style={styles.ImageBackground_0_1495}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15a3/7334/acb9fadfdee8da4446c69deacde72f00"
          }}
          style={styles.ImageBackground_0_1496}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f036/f3fa/43fa98cd420f209be1a74cc17da00d04"
          }}
          style={styles.ImageBackground_0_1497}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/015b/0133/0537b70d626f2ee7b695e59d3a9825b6"
          }}
          style={styles.ImageBackground_0_1498}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42c9/088b/63b395fc8c6ac64946dcb4c46d9bdfe9"
          }}
          style={styles.ImageBackground_0_1499}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37dd/24d2/817884bf5ce5e080da8ecfef816d4ef1"
          }}
          style={styles.ImageBackground_0_1500}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/156a/b18c/460bcab563a4d6fd95108fdd5bbeb99d"
          }}
          style={styles.ImageBackground_0_1501}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16b8/ca4e/4bd98e749abc1b7bc9c7680410edfb5a"
          }}
          style={styles.ImageBackground_0_1502}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b050/6545/0ea3c743a5f80838060ab8092438d913"
          }}
          style={styles.ImageBackground_0_1503}
        />
      </View>
      <View style={styles.View_0_1504}>
        <View style={styles.View_0_1505} />
        <View style={styles.View_0_1506}>
          <Text style={styles.Text_0_1506}>
            karennne liked martini_rond’s comment: @martini_rond Nice! 3h
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2dc/ef2f/f17fa226a200109154a7978ad79f2852"
          }}
          style={styles.ImageBackground_0_1507}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eab/734a/a4900aaf38de398587dc2d425a1ef7cc"
          }}
          style={styles.ImageBackground_0_1508}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe9d/6511/f4a9106ba393ea635bc20899be142dd0"
          }}
          style={styles.ImageBackground_0_1509}
        />
      </View>
      <View style={styles.View_0_1510}>
        <View style={styles.View_0_1511} />
        <View style={styles.View_0_1512}>
          <Text style={styles.Text_0_1512}>
            kiero_d, zackjohn and craig_love liked joshua_l photo. 3h
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06ae/a337/399a9a0f58ce51eec2ca48e68c480f4c"
          }}
          style={styles.ImageBackground_0_1513}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea3a/a014/e825dbd5bb3104b86d93e46bfd711842"
          }}
          style={styles.ImageBackground_0_1514}
        />
      </View>
      <View style={styles.View_0_1517}>
        <View style={styles.View_0_1518} />
        <View style={styles.View_0_1519}>
          <Text style={styles.Text_0_1519}>
            maxjacobson and zackjohn liked mis_potter’s post. 3h
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be09/6ca2/e4e13071622e575c30f71678b1cbb498"
          }}
          style={styles.ImageBackground_0_1520}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea3a/a014/e825dbd5bb3104b86d93e46bfd711842"
          }}
          style={styles.ImageBackground_0_1521}
        />
      </View>
      <View style={styles.View_0_1524}>
        <View style={styles.View_0_1525} />
        <View style={styles.View_0_1526}>
          <Text style={styles.Text_0_1526}>
            maxjacobson and craig_love liked martini_rond’s post. 3h
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7e0/4d80/9db3a41172a61b16402aecc5f294fcda"
          }}
          style={styles.ImageBackground_0_1527}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea3a/a014/e825dbd5bb3104b86d93e46bfd711842"
          }}
          style={styles.ImageBackground_0_1528}
        />
      </View>
      <View style={styles.View_0_1531}>
        <View style={styles.View_0_1532} />
        <View style={styles.View_0_1533}>
          <Text style={styles.Text_0_1533}>
            kiero_d started following craig_love. 3h
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01ac/3835/013839b89fa505e9382b18108f5ca2d9"
          }}
          style={styles.ImageBackground_0_1534}
        />
      </View>
      <View style={styles.View_0_1535}>
        <View style={styles.View_0_1536} />
        <View style={styles.View_0_1537}>
          <View style={styles.View_0_1538} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d84d/46cb/bb076f6922b392b4daf9d61854400790"
            }}
            style={styles.ImageBackground_0_1539}
          />
        </View>
        <View style={styles.View_0_1540}>
          <View style={styles.View_0_1541} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8940/a6c5/746204abaf030c610c36f979268ac524"
            }}
            style={styles.ImageBackground_0_1542}
          />
        </View>
        <View style={styles.View_0_1544}>
          <View style={styles.View_0_1545} />
          <View style={styles.View_0_1546}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83d4/d237/7980098ba3fe7578889914ea7472e3c6"
              }}
              style={styles.ImageBackground_0_1548}
            />
          </View>
        </View>
        <View style={styles.View_0_1551}>
          <View style={styles.View_0_1552} />
          <View style={styles.View_0_1553}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33db/579f/11f1b4308c4663fdbef46e270e5de7c8"
              }}
              style={styles.ImageBackground_0_1555}
            />
          </View>
        </View>
        <View style={styles.View_0_1557}>
          <View style={styles.View_0_1558} />
          <View style={styles.View_0_1559}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b85/9dfb/df5d43a3d2bfddee6aaed9080e91ced3"
              }}
              style={styles.ImageBackground_0_1561}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_1563}>
        <View style={styles.View_0_1564} />
        <View style={styles.View_0_1565}>
          <View style={styles.View_0_1566}>
            <View style={styles.View_0_1567} />
            <View style={styles.View_0_1568}>
              <Text style={styles.Text_0_1568}>Following</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/994c/872b/b071c71230d4246bb81c90daeba24cbc"
              }}
              style={styles.ImageBackground_0_1569}
            />
          </View>
          <View style={styles.View_0_1570}>
            <View style={styles.View_0_1571} />
            <View style={styles.View_0_1572}>
              <Text style={styles.Text_0_1572}>You</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1573}>
        <View style={styles.View_0_1574} />
        <View style={styles.View_0_1575} />
      </View>
      <View style={styles.View_0_15133}>
        <View style={styles.View_0_15134} />
        <View style={styles.View_0_15135}>
          <View style={styles.View_0_15136} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_0_15137}
          />
          <View style={styles.View_0_15138} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
          }}
          style={styles.ImageBackground_0_15139}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_0_15143}
        />
        <View style={styles.View_0_15148}>
          <View style={styles.View_0_15149}>
            <Text style={styles.Text_0_15149}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_1478: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.021857923497267%")
  },
  View_0_1477: {
    width: wp("100%"),
    height: hp("15.300546448087433%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_1479: {
    width: wp("61.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("2.7322404371584703%")
  },
  Text_0_1479: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07000000029802322,
    textTransform: "none"
  },
  ImageBackground_0_1480: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.0928961748633892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  ImageBackground_0_1481: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    resizeMode: "cover"
  },
  ImageBackground_0_1482: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    resizeMode: "cover"
  },
  ImageBackground_0_1483: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.800000000000004%"),
    resizeMode: "cover"
  },
  View_0_1485: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("90.1639344262295%")
  },
  View_0_1484: {
    width: wp("100%"),
    height: hp("15.300546448087433%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_1486: {
    width: wp("61.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("2.732240437158481%")
  },
  Text_0_1486: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07000000029802322,
    textTransform: "none"
  },
  ImageBackground_0_1487: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.092896174863398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  ImageBackground_0_1488: {
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%")
  },
  ImageBackground_0_1489: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.103825136612031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    resizeMode: "cover"
  },
  ImageBackground_0_1490: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.103825136612031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    resizeMode: "cover"
  },
  ImageBackground_0_1491: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.103825136612031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.800000000000004%"),
    resizeMode: "cover"
  },
  View_0_1493: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.71584699453552%")
  },
  View_0_1492: {
    width: wp("100%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_1494: {
    width: wp("61.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("2.732240437158474%")
  },
  Text_0_1494: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07000000029802322,
    textTransform: "none"
  },
  ImageBackground_0_1495: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.092896174863391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  ImageBackground_0_1496: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.1038251366120235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    resizeMode: "cover"
  },
  ImageBackground_0_1497: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("13.661202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    resizeMode: "cover"
  },
  ImageBackground_0_1498: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.1038251366120235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.599999999999994%"),
    resizeMode: "cover"
  },
  ImageBackground_0_1499: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.1038251366120235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    resizeMode: "cover"
  },
  ImageBackground_0_1500: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("13.661202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    resizeMode: "cover"
  },
  ImageBackground_0_1501: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.1038251366120235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.39999999999999%"),
    resizeMode: "cover"
  },
  ImageBackground_0_1502: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.1038251366120235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.800000000000004%"),
    resizeMode: "cover"
  },
  ImageBackground_0_1503: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.1038251366120235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.2%"),
    resizeMode: "cover"
  },
  View_0_1504: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81.9672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1505: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_1506: {
    width: wp("61.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("2.0491803278688536%")
  },
  Text_0_1506: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07000000029802322,
    textTransform: "none"
  },
  ImageBackground_0_1507: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  ImageBackground_0_1508: {
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%")
  },
  ImageBackground_0_1509: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    resizeMode: "cover"
  },
  View_0_1510: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.322404371584703%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1511: {
    width: wp("100%"),
    height: hp("8.333333333333332%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_1512: {
    width: wp("61.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("2.0491803278688465%")
  },
  Text_0_1512: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07000000029802322,
    textTransform: "none"
  },
  ImageBackground_0_1513: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    resizeMode: "cover"
  },
  ImageBackground_0_1514: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_0_1517: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65.57377049180327%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1518: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_1519: {
    width: wp("62.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("2.0491803278688536%")
  },
  Text_0_1519: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07000000029802322,
    textTransform: "none"
  },
  ImageBackground_0_1520: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    resizeMode: "cover"
  },
  ImageBackground_0_1521: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_0_1524: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("73.77049180327869%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1525: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_1526: {
    width: wp("62.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("2.0491803278688536%")
  },
  Text_0_1526: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07000000029802322,
    textTransform: "none"
  },
  ImageBackground_0_1527: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.092896174863398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    resizeMode: "cover"
  },
  ImageBackground_0_1528: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.092896174863398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_0_1531: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1532: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_1533: {
    width: wp("49.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("2.0491803278688465%")
  },
  Text_0_1533: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07000000029802322,
    textTransform: "none"
  },
  ImageBackground_0_1534: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.092896174863391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_0_1535: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("100.13661202185793%")
  },
  View_0_1536: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_0_1537: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("0%")
  },
  View_0_1538: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)",
    opacity: 0.00009999999747378752
  },
  ImageBackground_0_1539: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333323%"),
    top: hp("1.5027322404371546%")
  },
  View_0_1540: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("0%")
  },
  View_0_1541: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)",
    opacity: 0.00009999999747378752
  },
  ImageBackground_0_1542: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666657%"),
    top: hp("1.639344262295083%")
  },
  View_0_1544: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  View_0_1545: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_1546: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.733333333333334%"),
    top: hp("1.4002732240437012%")
  },
  ImageBackground_0_1548: {
    width: wp("6.266666666666667%"),
    minWidth: wp("6.266666666666667%"),
    height: hp("3.210382513661202%"),
    minHeight: hp("3.210382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1551: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%")
  },
  View_0_1552: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_1553: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.733333333333331%"),
    top: hp("1.4002732240437012%")
  },
  ImageBackground_0_1555: {
    width: wp("6.230389404296875%"),
    minWidth: wp("6.230389404296875%"),
    height: hp("3.1917978505619233%"),
    minHeight: hp("3.1917978505619233%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1557: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1558: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_1559: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("1.4506355660860635%")
  },
  ImageBackground_0_1561: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.194169789715543%"),
    minHeight: hp("3.194169789715543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1563: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1564: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_0_1565: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("6.0109289617486334%")
  },
  View_0_1566: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1567: {
    width: wp("48%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 240, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_1568: {
    width: wp("19.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666666%"),
    top: hp("1.502732240437159%")
  },
  Text_0_1568: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.33000001311302185,
    textTransform: "none"
  },
  ImageBackground_0_1569: {
    width: wp("48%"),
    height: hp("0.1366120218579235%"),
    top: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1570: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1571: {
    width: wp("48%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 240, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_1572: {
    width: wp("7.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333336%"),
    top: hp("1.502732240437159%")
  },
  Text_0_1572: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.33000001311302185,
    textTransform: "none"
  },
  View_0_1573: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.28415300546447%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1574: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_0_1575: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_15133: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_15134: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_0_15135: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.42220052083333%"),
    top: hp("2.367897242144809%")
  },
  View_0_15136: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_0_15137: {
    width: wp("0.3541434605916341%"),
    minWidth: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%"),
    top: hp("0.500888511782787%")
  },
  View_0_15138: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333456%"),
    top: hp("0.27322404371584685%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_0_15139: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_0_15143: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413523522882514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%")
  },
  View_0_15148: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("1.912568306010929%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_15149: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_15149: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
