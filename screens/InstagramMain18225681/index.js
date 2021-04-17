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
      <View style={styles.View_0_1647}>
        <View style={styles.View_0_1648}>
          <View style={styles.View_0_1649} />
          <View style={styles.View_0_1650}>
            <Text style={styles.Text_0_1650}>Tokyo, Japan</Text>
          </View>
          <View style={styles.View_0_1651}>
            <Text style={styles.Text_0_1651}>joshua_l</Text>
          </View>
          <View style={styles.View_0_1652}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a417/42f9/e5a39b9be77cfaefe5110020d2cfe7d9"
              }}
              style={styles.ImageBackground_0_1654}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/881f/d0e6/c74f299d3e3284fd0c0d3b5e12fa755a"
            }}
            style={styles.ImageBackground_0_1656}
          />
          <View style={styles.View_0_1657}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed8a/ad17/03cf3fc166a5bc15641f26989f9dcdcf"
              }}
              style={styles.ImageBackground_0_1659}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75e2/2645/c691e0f3ebca28f01bf610d391891184"
          }}
          style={styles.ImageBackground_0_1662}
        />
        <View style={styles.View_0_1663}>
          <View style={styles.View_0_1664} />
          <View style={styles.View_0_1665}>
            <Text style={styles.Text_0_1665}>1/3</Text>
          </View>
        </View>
        <View style={styles.View_0_1666}>
          <View style={styles.View_0_1667} />
          <View style={styles.View_0_1668}>
            <Text style={styles.Text_0_1668}>September 19</Text>
          </View>
          <View style={styles.View_0_1669}>
            <Text style={styles.Text_0_1669}>
              joshua_l The game in Japan was amazing and I want to share some
              photos
            </Text>
          </View>
          <View style={styles.View_0_1670}>
            <View style={styles.View_0_1671}>
              <Text style={styles.Text_0_1671}>
                Liked by craig_love and 44,686 others
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c25/c9bf/16d0a70bfecccaf10e77a0751f1bd5a0"
              }}
              style={styles.ImageBackground_0_1672}
            />
          </View>
          <View style={styles.View_0_1673}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cca/5aee/e9d050403635b75a638aeaee445ab734"
              }}
              style={styles.ImageBackground_0_1675}
            />
          </View>
          <View style={styles.View_0_1678}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d421/1190/1aede98d1a1e0258fac305368f65b76a"
              }}
              style={styles.ImageBackground_0_1680}
            />
          </View>
          <View style={styles.View_0_1682}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4771/b938/c477bdc477a9f9fa7ea020b3e3dcb6a1"
              }}
              style={styles.ImageBackground_0_1684}
            />
          </View>
          <View style={styles.View_0_1686}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b070/3bf5/b02fad06696c87999b3c59445a592937"
              }}
              style={styles.ImageBackground_0_1688}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1db/b4d2/13793ebee3bcf9fa2637d4bcbe886aec"
            }}
            style={styles.ImageBackground_0_1690}
          />
        </View>
      </View>
      <View style={styles.View_0_1694}>
        <View style={styles.View_0_1696} />
        <View style={styles.View_0_1695} />
        <View style={styles.View_0_1698}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bba/169e/966c153ce6174eaeae906074cb53eb61"
            }}
            style={styles.ImageBackground_0_1697}
          />
          <View style={styles.View_0_1701}>
            <Text style={styles.Text_0_1701}>Your Story</Text>
          </View>
        </View>
        <View style={styles.View_0_1703}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/addf/7224/3f1bc9ff133436c0b6e56c1177839249"
            }}
            style={styles.ImageBackground_0_1702}
          />
          <View style={styles.View_0_1706}>
            <Text style={styles.Text_0_1706}>zackjohn</Text>
          </View>
        </View>
        <View style={styles.View_0_1708}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1475/0e1f/e617fa761ce4df47b2be4717a68e1aed"
            }}
            style={styles.ImageBackground_0_1707}
          />
          <View style={styles.View_0_1711}>
            <Text style={styles.Text_0_1711}>kieron_d</Text>
          </View>
        </View>
        <View style={styles.View_0_1713}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54d/095d/5fe89e7bd791035a9b1e7a26fefcd116"
            }}
            style={styles.ImageBackground_0_1712}
          />
          <View style={styles.View_0_1716}>
            <Text style={styles.Text_0_1716}>craig_love</Text>
          </View>
        </View>
        <View style={styles.View_0_1718}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bdc/c7bd/64167ef8c7027a72ca720dbd5ab9c63a"
            }}
            style={styles.ImageBackground_0_1717}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcd8/a040/1d370bab9d8fb6b3f85562c8174bab74"
            }}
            style={styles.ImageBackground_0_1719}
          />
          <View style={styles.View_0_1720}>
            <Text style={styles.Text_0_1720}>karennne</Text>
          </View>
          <View style={styles.View_0_1722}>
            <View style={styles.View_0_1721} />
            <View style={styles.View_0_1723}>
              <Text style={styles.Text_0_1723}>LIVE</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1724}>
        <View style={styles.View_0_1725} />
        <View style={styles.View_0_1726}>
          <View style={styles.View_0_1727} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d84d/46cb/bb076f6922b392b4daf9d61854400790"
            }}
            style={styles.ImageBackground_0_1728}
          />
        </View>
        <View style={styles.View_0_1729}>
          <View style={styles.View_0_1730} />
          <View style={styles.View_0_1731}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4771/b938/c477bdc477a9f9fa7ea020b3e3dcb6a1"
              }}
              style={styles.ImageBackground_0_1733}
            />
          </View>
        </View>
        <View style={styles.View_0_1735}>
          <View style={styles.View_0_1736} />
          <View style={styles.View_0_1737}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c385/39cc/7d83fa914c4f2ff8a33ddbd086e0949c"
              }}
              style={styles.ImageBackground_0_1739}
            />
          </View>
        </View>
        <View style={styles.View_0_1742}>
          <View style={styles.View_0_1743} />
          <View style={styles.View_0_1744}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0bf/cecc/baa43c127520302902563d18971d5622"
              }}
              style={styles.ImageBackground_0_1746}
            />
          </View>
        </View>
        <View style={styles.View_0_1748}>
          <View style={styles.View_0_1749} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11e7/eefe/e7909c1298b204b53bc7d51d1b1216b5"
            }}
            style={styles.ImageBackground_0_1750}
          />
        </View>
      </View>
      <View style={styles.View_0_1752}>
        <View style={styles.View_0_1753} />
        <View style={styles.View_0_1757}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4376/3d2e/d97608270a38e5c08840f76a53118893"
            }}
            style={styles.ImageBackground_0_1755}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bc0/6f61/aa13806777c8b98b142b5633f6d995a8"
            }}
            style={styles.ImageBackground_0_1761}
          />
        </View>
        <View style={styles.View_0_1762}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45e4/abfe/bcd2b49bea701cecf8e52596f478b8e0"
            }}
            style={styles.ImageBackground_0_1764}
          />
        </View>
        <View style={styles.View_0_1768}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4941/320e/0c9510ca0749b8d7fadb8412c8debe30"
            }}
            style={styles.ImageBackground_0_1770}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edd2/a441/35b7e903227d14cfb032b31ba405275a"
            }}
            style={styles.ImageBackground_0_1772}
          />
        </View>
        <View style={styles.View_0_1773}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cca/5aee/e9d050403635b75a638aeaee445ab734"
            }}
            style={styles.ImageBackground_0_1775}
          />
        </View>
      </View>
      <View style={styles.View_0_1778}>
        <View style={styles.View_0_1779} />
        <View style={styles.View_0_1780}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c4d/d8a4/5898ea6223f3866c96a0a2b0f8dbf697"
            }}
            style={styles.ImageBackground_0_1782}
          />
          <View style={styles.View_0_1785}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5e/65c1/5989f51caa4acec8db82e3c4db888257"
              }}
              style={styles.ImageBackground_0_1784}
            />
            <View style={styles.View_0_1786} />
          </View>
          <View style={styles.View_0_1787} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ed7/5ed8/6d52dd9ca7839e477e35f725cd76ef91"
          }}
          style={styles.ImageBackground_0_1789}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8993/e879/54bd9237f2d3127b556731ccdf8548cf"
          }}
          style={styles.ImageBackground_0_1793}
        />
        <View style={styles.View_0_1797}>
          <View style={styles.View_0_1798}>
            <Text style={styles.Text_0_1798}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1799}>
        <View style={styles.View_0_1800} />
        <View style={styles.View_0_1801} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_1647: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("78.68852459016394%"),
    minHeight: hp("78.68852459016394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.40983606557377%")
  },
  View_0_1648: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1649: {
    width: wp("100%"),
    height: hp("7.377049180327869%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1650: {
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("4.098360655737704%")
  },
  Text_0_1650: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.07000000029802322,
    textTransform: "none"
  },
  View_0_1651: {
    width: wp("13.866666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("1.5027322404371617%")
  },
  Text_0_1651: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_0_1652: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.799999999999997%"),
    top: hp("2.185792349726775%")
  },
  ImageBackground_0_1654: {
    width: wp("2.6395238240559897%"),
    height: hp("1.3384515470494338%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1656: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("1.5027322404371617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%")
  },
  View_0_1657: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.26666666666667%"),
    top: hp("3.483606557377051%")
  },
  ImageBackground_0_1659: {
    width: wp("3.733333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1662: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51.229508196721305%"),
    minHeight: hp("51.229508196721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.377049180327866%"),
    resizeMode: "cover"
  },
  View_0_1663: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("9.289617486338798%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1664: {
    width: wp("9.066666666666666%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    opacity: 0.699999988079071
  },
  View_0_1665: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%"),
    top: hp("0.8196721311475414%")
  },
  Text_0_1665: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1666: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20.081967213114755%"),
    minHeight: hp("20.081967213114755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58.606557377049185%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1667: {
    width: wp("100%"),
    height: hp("20.081967213114755%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1668: {
    width: wp("19.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("16.530054644808743%")
  },
  Text_0_1668: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.05000000074505806,
    textTransform: "none"
  },
  View_0_1669: {
    width: wp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("9.836065573770483%")
  },
  Text_0_1669: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_0_1670: {
    width: wp("70.13333333333334%"),
    height: hp("2.5956284153005464%"),
    top: hp("6.557377049180317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1671: {
    width: wp("63.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%")
  },
  Text_0_1671: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07000000029802322,
    textTransform: "none"
  },
  ImageBackground_0_1672: {
    width: wp("4.533333333333333%"),
    height: hp("2.3224043715846996%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333286%")
  },
  View_0_1673: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.2%"),
    top: hp("1.8442622950819612%")
  },
  ImageBackground_0_1675: {
    width: wp("6.060406494140625%"),
    height: hp("2.6985997059306164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1678: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%"),
    top: hp("1.8442622950819612%")
  },
  ImageBackground_0_1680: {
    width: wp("5.866666666666666%"),
    height: hp("3.016264451657488%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1682: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("1.84478759765625%")
  },
  ImageBackground_0_1684: {
    width: wp("6.309241231282551%"),
    height: hp("2.8109873578848084%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1686: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.36282552083334%"),
    top: hp("1.7320393213157388%")
  },
  ImageBackground_0_1688: {
    width: wp("5.467061360677084%"),
    height: hp("3.162896568006505%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1690: {
    width: wp("6.933333333333333%"),
    height: hp("0.819672131147541%"),
    top: hp("2.868852459016381%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.53333333333333%")
  },
  View_0_1694: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.021857923497267%")
  },
  View_0_1696: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1695: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1698: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1697: {
    width: wp("16.53333333333333%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1701: {
    width: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.39999999999999947%"),
    top: hp("9.153005464480874%")
  },
  Text_0_1701: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  View_0_1703: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.400000000000006%"),
    top: hp("1.229508196721314%")
  },
  ImageBackground_0_1702: {
    width: wp("16.53333333333333%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1706: {
    width: wp("13.600000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4666666666666615%"),
    top: hp("9.153005464480874%")
  },
  Text_0_1706: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  View_0_1708: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.26666666666667%"),
    top: hp("1.229508196721314%")
  },
  ImageBackground_0_1707: {
    width: wp("16.53333333333333%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1711: {
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666742%"),
    top: hp("9.153005464480874%")
  },
  Text_0_1711: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  View_0_1713: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%"),
    top: hp("1.229508196721314%")
  },
  ImageBackground_0_1712: {
    width: wp("16.53333333333333%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1716: {
    width: wp("15.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666714%"),
    top: hp("9.153005464480874%")
  },
  Text_0_1716: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  View_0_1718: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333333%"),
    top: hp("1.229508196721314%")
  },
  ImageBackground_0_1717: {
    width: wp("16.53333333333333%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1719: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000043%")
  },
  View_0_1720: {
    width: wp("14.133333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333357%"),
    top: hp("9.153005464480874%")
  },
  Text_0_1720: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  View_0_1722: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.800000000000001%"),
    top: hp("6.967213114754099%")
  },
  View_0_1721: {
    width: wp("6.933333333333333%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(254, 254, 254, 1)",
    borderWidth: 2
  },
  View_0_1723: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0.4098360655737707%")
  },
  Text_0_1723: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 6,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_0_1724: {
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
  View_0_1725: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_0_1726: {
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
  View_0_1727: {
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
  ImageBackground_0_1728: {
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
  View_0_1729: {
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
  View_0_1730: {
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
  View_0_1731: {
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
  ImageBackground_0_1733: {
    width: wp("6.309241231282551%"),
    minWidth: wp("6.309241231282551%"),
    height: hp("2.8109873578848084%"),
    minHeight: hp("2.8109873578848084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1735: {
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
  View_0_1736: {
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
  View_0_1737: {
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
  ImageBackground_0_1739: {
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
  View_0_1742: {
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
  View_0_1743: {
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
  View_0_1744: {
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
  ImageBackground_0_1746: {
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
  View_0_1748: {
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
  View_0_1749: {
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
  ImageBackground_0_1750: {
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
  View_0_1752: {
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
  View_0_1753: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_0_1757: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("7.377049180327869%")
  },
  ImageBackground_0_1755: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1761: {
    width: wp("2.2017786661783854%"),
    minWidth: wp("2.2017786661783854%"),
    height: hp("2.900749216965639%"),
    minHeight: hp("2.900749216965639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1762: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("7.377049180327869%")
  },
  ImageBackground_0_1764: {
    width: wp("6.266666666666667%"),
    minWidth: wp("6.266666666666667%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1768: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("7.162125384221311%")
  },
  ImageBackground_0_1770: {
    width: wp("5.866900126139323%"),
    minWidth: wp("5.866900126139323%"),
    height: hp("3.357000819972304%"),
    minHeight: hp("3.357000819972304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1772: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("0.2490768015710385%")
  },
  View_0_1773: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.68313802083333%"),
    top: hp("7.603677634984418%")
  },
  ImageBackground_0_1775: {
    width: wp("6.060406494140625%"),
    minWidth: wp("6.060406494140625%"),
    height: hp("2.6985997059306164%"),
    minHeight: hp("2.6985997059306164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1778: {
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
  View_0_1779: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_0_1780: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%"),
    top: hp("2.459016393442623%")
  },
  ImageBackground_0_1782: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1785: {
    width: wp("0.4%"),
    minWidth: wp("0.4%"),
    height: hp("0.529232572336666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%"),
    top: hp("0.4781420765027322%")
  },
  ImageBackground_0_1784: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6666666666666714%"),
    top: hp("-0.00860808325595519%")
  },
  View_0_1786: {
    width: wp("0.6666666666666667%"),
    minWidth: wp("0.6666666666666667%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6666666666666714%"),
    top: hp("-0.00860808325595519%"),
    backgroundColor: "rgba(62, 81, 85, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1787: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("0.8879781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    top: hp("0.27322404371584685%"),
    backgroundColor: "rgba(6, 6, 6, 1)"
  },
  ImageBackground_0_1789: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675783084389943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18502604166666%")
  },
  ImageBackground_0_1793: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.4134787054009776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31113281249999%")
  },
  View_0_1797: {
    width: wp("14.399999999999999%"),
    height: hp("2.459016393442623%"),
    top: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1798: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_1798: {
    color: "rgba(23, 23, 23, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_0_1799: {
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
  View_0_1800: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_0_1801: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(6, 6, 6, 1)"
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
