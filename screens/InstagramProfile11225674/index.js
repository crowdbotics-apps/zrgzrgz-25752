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
      <View style={styles.View_0_928}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85bf/cd18/030766c375f193793c20c2e2fd96cd74"
          }}
          style={styles.ImageBackground_0_929}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cdf/bc62/ab05b4fc5a364a0da42c1346f535cd9b"
          }}
          style={styles.ImageBackground_0_930}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3194/61ec/55721c5607f695cd5ebeb4527d240606"
          }}
          style={styles.ImageBackground_0_931}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7513/644e/30de7bf529b5a67b113da0ae468fae76"
          }}
          style={styles.ImageBackground_0_932}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c817/fee7/dd92c3206603874e1b46de3afe6766de"
          }}
          style={styles.ImageBackground_0_933}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a1b/5f40/555805d67cd8badd344d4f72cd3f83e8"
          }}
          style={styles.ImageBackground_0_934}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df6c/6372/f4442238d4fa2c6f6d61457c0fa3376c"
          }}
          style={styles.ImageBackground_0_935}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab8/d6c1/02654a961fa746f672403440656c549c"
          }}
          style={styles.ImageBackground_0_936}
        />
        <View style={styles.View_0_937}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72d/7638/dd8786ce38c67c202d0072c21072a125"
            }}
            style={styles.ImageBackground_0_938}
          />
          <View style={styles.View_0_939}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b036/2b7e/6ec929011ffa09a48af17f097a47b0ad"
              }}
              style={styles.ImageBackground_0_941}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_945}>
        <View style={styles.View_0_946} />
        <View style={styles.View_0_947}>
          <View style={styles.View_0_948} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/940a/ea0c/7f291a36bbd4526392e4ff96a6b21bb3"
            }}
            style={styles.ImageBackground_0_949}
          />
          <View style={styles.View_0_950}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8c0/47e9/499597c0d05a64e74d219f7319c673c3"
              }}
              style={styles.ImageBackground_0_952}
            />
          </View>
        </View>
        <View style={styles.View_0_962}>
          <View style={styles.View_0_963} />
          <View style={styles.View_0_964}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb89/551b/29800f73889c2aadbf7af3656c02291a"
              }}
              style={styles.ImageBackground_0_966}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_971}>
        <View style={styles.View_0_972} />
        <View style={styles.View_0_973}>
          <View style={styles.View_0_974} />
          <View style={styles.View_0_975}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d456/7d1c/e8abd4f4a916d55edd933a012138b45c"
              }}
              style={styles.ImageBackground_0_977}
            />
          </View>
          <View style={styles.View_0_980}>
            <Text style={styles.Text_0_980}>jacob_w</Text>
          </View>
          <View style={styles.View_0_981}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a40/76bb/5a0e21865a1037aaea3a99f9b017ed76"
              }}
              style={styles.ImageBackground_0_983}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea93/e550/921f17e524dbfd58cfda2f19145166c4"
            }}
            style={styles.ImageBackground_0_985}
          />
        </View>
        <View style={styles.View_0_987}>
          <View style={styles.View_0_988}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/380d/03ba/dfc52b640ae2e9cd311d552add49e6d5"
              }}
              style={styles.ImageBackground_0_989}
            />
            <View style={styles.View_0_990}>
              <Text style={styles.Text_0_990}>New</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c72a/10ee/669a4d4de0fab36eaaf4d1f0a6ec9191"
              }}
              style={styles.ImageBackground_0_991}
            />
          </View>
          <View style={styles.View_0_993}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95b9/8e6c/75e264b529d0a335d96f57e0dd068640"
              }}
              style={styles.ImageBackground_0_994}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53c6/ce93/5020a7ad69fcefa70b37800fe7081091"
              }}
              style={styles.ImageBackground_0_995}
            />
            <View style={styles.View_0_996}>
              <Text style={styles.Text_0_996}>Friends</Text>
            </View>
          </View>
          <View style={styles.View_0_997}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95b9/8e6c/75e264b529d0a335d96f57e0dd068640"
              }}
              style={styles.ImageBackground_0_998}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02b2/e991/ec75e298e96d03313b76d4b425ba10cb"
              }}
              style={styles.ImageBackground_0_999}
            />
            <View style={styles.View_0_1000}>
              <Text style={styles.Text_0_1000}>Sport </Text>
            </View>
          </View>
          <View style={styles.View_0_1001}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95b9/8e6c/75e264b529d0a335d96f57e0dd068640"
              }}
              style={styles.ImageBackground_0_1002}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11e4/cbf5/f7bb993343c586b1e3bdbe5769fe1cd2"
              }}
              style={styles.ImageBackground_0_1003}
            />
            <View style={styles.View_0_1004}>
              <Text style={styles.Text_0_1004}>Design</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_1005}>
          <View style={styles.View_0_1006} />
          <View style={styles.View_0_1007}>
            <Text style={styles.Text_0_1007}>Edit Profile</Text>
          </View>
        </View>
        <View style={styles.View_0_1008}>
          <View style={styles.View_0_1009}>
            <View style={styles.View_0_1010}>
              <Text style={styles.Text_0_1010}>Jacob West</Text>
            </View>
            <View style={styles.View_0_1011}>
              <Text style={styles.Text_0_1011}>
                Digital goodies designer @pixsellz Everything is designed.
              </Text>
            </View>
          </View>
          <View style={styles.View_0_1012}>
            <View style={styles.View_0_1013}>
              <Text style={styles.Text_0_1013}>Posts</Text>
            </View>
            <View style={styles.View_0_1014}>
              <Text style={styles.Text_0_1014}>Followers</Text>
            </View>
            <View style={styles.View_0_1015}>
              <Text style={styles.Text_0_1015}>Following</Text>
            </View>
            <View style={styles.View_0_1016}>
              <Text style={styles.Text_0_1016}>54</Text>
            </View>
            <View style={styles.View_0_1017}>
              <Text style={styles.Text_0_1017}>834</Text>
            </View>
            <View style={styles.View_0_1018}>
              <Text style={styles.Text_0_1018}>162</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce02/4079/dcc84f49cbf16b2378cca7d33dd63117"
            }}
            style={styles.ImageBackground_0_1019}
          />
        </View>
      </View>
      <View style={styles.View_0_1022}>
        <View style={styles.View_0_1023} />
        <View style={styles.View_0_1024}>
          <View style={styles.View_0_1025} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d84d/46cb/bb076f6922b392b4daf9d61854400790"
            }}
            style={styles.ImageBackground_0_1026}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5914/398e/8dfc1c18a2b43b2ed2d4f8cbb1ade50a"
            }}
            style={styles.ImageBackground_0_1027}
          />
        </View>
        <View style={styles.View_0_1028}>
          <View style={styles.View_0_1029} />
          <View style={styles.View_0_1030}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad45/ff9b/88ea10a758c0c2576d083adaab903b3f"
              }}
              style={styles.ImageBackground_0_1032}
            />
          </View>
        </View>
        <View style={styles.View_0_1034}>
          <View style={styles.View_0_1035} />
          <View style={styles.View_0_1036}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83d4/d237/7980098ba3fe7578889914ea7472e3c6"
              }}
              style={styles.ImageBackground_0_1038}
            />
          </View>
        </View>
        <View style={styles.View_0_1041}>
          <View style={styles.View_0_1042} />
          <View style={styles.View_0_1043}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33db/579f/11f1b4308c4663fdbef46e270e5de7c8"
              }}
              style={styles.ImageBackground_0_1045}
            />
          </View>
        </View>
        <View style={styles.View_0_1047}>
          <View style={styles.View_0_1048} />
          <View style={styles.View_0_1049}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b85/9dfb/df5d43a3d2bfddee6aaed9080e91ced3"
              }}
              style={styles.ImageBackground_0_1051}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_1053}>
        <View style={styles.View_0_1054} />
        <View style={styles.View_0_1055} />
      </View>
      <View style={styles.View_0_15031}>
        <View style={styles.View_0_15032} />
        <View style={styles.View_0_15033}>
          <View style={styles.View_0_15034} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_0_15035}
          />
          <View style={styles.View_0_15036} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
          }}
          style={styles.ImageBackground_0_15037}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_0_15041}
        />
        <View style={styles.View_0_15046}>
          <View style={styles.View_0_15047}>
            <Text style={styles.Text_0_15047}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_928: {
    width: wp("99.46949602122017%"),
    minWidth: wp("99.46949602122017%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4641909814323607%"),
    top: hp("61.885245901639344%")
  },
  ImageBackground_0_929: {
    width: wp("32.891246684350136%"),
    minWidth: wp("32.891246684350136%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.076502732240435%"),
    resizeMode: "cover"
  },
  ImageBackground_0_930: {
    width: wp("32.891246684350136%"),
    minWidth: wp("32.891246684350136%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.15300546448088%"),
    resizeMode: "cover"
  },
  ImageBackground_0_931: {
    width: wp("32.891246684350136%"),
    minWidth: wp("32.891246684350136%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.15649867374005%"),
    top: hp("34.15300546448088%"),
    resizeMode: "cover"
  },
  ImageBackground_0_932: {
    width: wp("33.15649867374005%"),
    minWidth: wp("33.15649867374005%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.31299734748009%"),
    top: hp("34.15300546448088%"),
    resizeMode: "cover"
  },
  ImageBackground_0_933: {
    width: wp("32.891246684350136%"),
    minWidth: wp("32.891246684350136%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_0_934: {
    width: wp("33.15649867374005%"),
    minWidth: wp("33.15649867374005%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.31299734748009%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_0_935: {
    width: wp("32.891246684350136%"),
    minWidth: wp("32.891246684350136%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.15649867374005%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_0_936: {
    width: wp("33.15649867374005%"),
    minWidth: wp("33.15649867374005%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.31299734748009%"),
    top: hp("17.076502732240435%"),
    resizeMode: "cover"
  },
  View_0_937: {
    width: wp("32.891246684350136%"),
    minWidth: wp("32.891246684350136%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.15649867374005%"),
    top: hp("17.076502732240435%")
  },
  ImageBackground_0_938: {
    width: wp("32.891246684350136%"),
    minWidth: wp("32.891246684350136%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_0_939: {
    width: wp("5.305039787798409%"),
    minWidth: wp("5.305039787798409%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.259946949602124%"),
    top: hp("1.2295081967213122%")
  },
  ImageBackground_0_941: {
    width: wp("5.305039787798409%"),
    minWidth: wp("5.305039787798409%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_945: {
    width: wp("99.46949602122017%"),
    minWidth: wp("99.46949602122017%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4641909814323607%"),
    top: hp("55.73770491803278%")
  },
  View_0_946: {
    width: wp("99.46949602122017%"),
    minWidth: wp("99.46949602122017%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_0_947: {
    width: wp("49.3368700265252%"),
    minWidth: wp("49.3368700265252%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_948: {
    width: wp("49.3368700265252%"),
    minWidth: wp("49.3368700265252%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.00009999999747378752
  },
  ImageBackground_0_949: {
    width: wp("49.07161803713528%"),
    minWidth: wp("49.07161803713528%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13262599469496017%"),
    top: hp("5.874316939890711%")
  },
  View_0_950: {
    width: wp("6.10079575596817%"),
    minWidth: wp("6.10079575596817%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.750663129973475%"),
    top: hp("1.5027322404371617%")
  },
  ImageBackground_0_952: {
    width: wp("5.968169761273209%"),
    minWidth: wp("5.968169761273209%"),
    height: hp("3.0737704918032787%"),
    minHeight: hp("3.0737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_962: {
    width: wp("49.3368700265252%"),
    minWidth: wp("49.3368700265252%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13262599469496%"),
    top: hp("0%")
  },
  View_0_963: {
    width: wp("49.3368700265252%"),
    minWidth: wp("49.3368700265252%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_964: {
    width: wp("6.36604774535809%"),
    minWidth: wp("6.36604774535809%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.220159151193634%"),
    top: hp("1.4047924938097722%")
  },
  ImageBackground_0_966: {
    width: wp("6.23342175066313%"),
    minWidth: wp("6.23342175066313%"),
    height: hp("3.240023024095212%"),
    minHeight: hp("3.240023024095212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_971: {
    width: wp("99.73474801061008%"),
    minWidth: wp("99.73474801061008%"),
    height: hp("55.05464480874317%"),
    minHeight: hp("55.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2652519893899204%"),
    top: hp("0.6830601092896175%")
  },
  View_0_972: {
    width: wp("99.46949602122017%"),
    minWidth: wp("99.46949602122017%"),
    height: hp("55.05464480874317%"),
    minHeight: hp("55.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1989389920424403%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_0_973: {
    width: wp("99.73474801061008%"),
    minWidth: wp("99.73474801061008%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_974: {
    width: wp("99.46949602122017%"),
    height: hp("12.021857923497267%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1989389920424403%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_975: {
    width: wp("5.570291777188329%"),
    minWidth: wp("5.570291777188329%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.32360742705569%"),
    top: hp("7.786885245901639%")
  },
  ImageBackground_0_977: {
    width: wp("5.437665782493369%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13262599469497616%")
  },
  View_0_980: {
    width: wp("15.915119363395224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.777188328912466%"),
    top: hp("7.650273224043715%")
  },
  Text_0_980: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.33000001311302185,
    textTransform: "none"
  },
  View_0_981: {
    width: wp("2.3872679045092835%"),
    minWidth: wp("2.3872679045092835%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.86472148541114%"),
    top: hp("8.196721311475411%")
  },
  ImageBackground_0_983: {
    width: wp("2.320954907161804%"),
    height: hp("1.605191256830601%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_985: {
    width: wp("2.9177718832891246%"),
    height: hp("0.9562841530054645%"),
    top: hp("8.627252630848703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.01856763925729%")
  },
  View_0_987: {
    width: wp("82.22811671087533%"),
    minWidth: wp("82.22811671087533%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.912466843501326%"),
    top: hp("41.666666666666664%")
  },
  View_0_988: {
    width: wp("16.976127320954905%"),
    minWidth: wp("16.976127320954905%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_989: {
    width: wp("16.976127320954905%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_990: {
    width: wp("6.896551724137931%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.039787798408488%"),
    top: hp("9.15300546448087%")
  },
  Text_0_990: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  ImageBackground_0_991: {
    width: wp("4.774535809018567%"),
    height: hp("2.459016393442623%"),
    top: hp("3.1420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.10079575596817%")
  },
  View_0_993: {
    width: wp("16.976127320954905%"),
    minWidth: wp("16.976127320954905%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.750663129973475%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_994: {
    width: wp("16.976127320954905%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_995: {
    width: wp("14.854111405835543%"),
    height: hp("7.650273224043716%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0610079575596814%")
  },
  View_0_996: {
    width: wp("11.140583554376658%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.91777188328912%"),
    top: hp("9.15300546448087%")
  },
  Text_0_996: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  View_0_997: {
    width: wp("16.976127320954905%"),
    minWidth: wp("16.976127320954905%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.50132625994695%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_998: {
    width: wp("16.976127320954905%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_999: {
    width: wp("14.854111405835543%"),
    height: hp("7.650273224043716%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0610079575596885%")
  },
  View_0_1000: {
    width: wp("8.488063660477453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1114058355437635%"),
    top: hp("9.15300546448087%")
  },
  Text_0_1000: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  View_0_1001: {
    width: wp("16.976127320954905%"),
    minWidth: wp("16.976127320954905%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.25198938992042%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_1002: {
    width: wp("16.976127320954905%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1003: {
    width: wp("14.854111405835543%"),
    height: hp("7.650273224043716%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0610079575596814%")
  },
  View_0_1004: {
    width: wp("10.610079575596817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.183023872679044%"),
    top: hp("9.15300546448087%")
  },
  Text_0_1004: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  View_0_1005: {
    width: wp("90.98143236074272%"),
    minWidth: wp("90.98143236074272%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4429708222811675%"),
    top: hp("35.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1006: {
    width: wp("90.98143236074272%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_0_1007: {
    width: wp("18.30238726790451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.339522546419104%"),
    top: hp("0.6830601092896131%")
  },
  Text_0_1007: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_0_1008: {
    width: wp("92.3076923076923%"),
    minWidth: wp("92.3076923076923%"),
    height: hp("21.44808743169399%"),
    minHeight: hp("21.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1167108753315653%"),
    top: hp("12.021857923497269%")
  },
  View_0_1009: {
    width: wp("90.98143236074272%"),
    minWidth: wp("90.98143236074272%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3262599469496021%"),
    top: hp("14.754098360655739%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1010: {
    width: wp("18.30238726790451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_1010: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1011: {
    width: wp("90.98143236074272%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.04918032786885%")
  },
  Text_0_1011: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1012: {
    width: wp("54.37665782493368%"),
    minWidth: wp("54.37665782493368%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.748010610079575%"),
    top: hp("4.098360655737704%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1013: {
    width: wp("9.018567639257293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016395%")
  },
  Text_0_1013: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_0_1014: {
    width: wp("15.384615384615385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.03713527851459%"),
    top: hp("2.868852459016395%")
  },
  Text_0_1014: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_0_1015: {
    width: wp("15.384615384615385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.9920424403183%"),
    top: hp("2.868852459016395%")
  },
  Text_0_1015: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_0_1016: {
    width: wp("5.570291777188329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8567639257294388%"),
    top: hp("0%")
  },
  Text_0_1016: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_0_1017: {
    width: wp("8.488063660477453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.618037135278513%"),
    top: hp("0%")
  },
  Text_0_1017: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_0_1018: {
    width: wp("7.6923076923076925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.36870026525199%"),
    top: hp("0%")
  },
  Text_0_1018: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_0_1019: {
    width: wp("25.46419098143236%"),
    minWidth: wp("25.46419098143236%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1022: {
    width: wp("99.46949602122017%"),
    minWidth: wp("99.46949602122017%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4641909814323607%"),
    top: hp("102.18579234972678%")
  },
  View_0_1023: {
    width: wp("99.46949602122017%"),
    minWidth: wp("99.46949602122017%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_0_1024: {
    width: wp("19.893899204244033%"),
    minWidth: wp("19.893899204244033%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.57559681697613%"),
    top: hp("0%")
  },
  View_0_1025: {
    width: wp("19.893899204244033%"),
    minWidth: wp("19.893899204244033%"),
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
  ImageBackground_0_1026: {
    width: wp("6.10079575596817%"),
    minWidth: wp("6.10079575596817%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.896551724137922%"),
    top: hp("1.5027322404371546%")
  },
  ImageBackground_0_1027: {
    width: wp("7.161803713527852%"),
    minWidth: wp("7.161803713527852%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.366047745358074%"),
    top: hp("1.2295081967213122%")
  },
  View_0_1028: {
    width: wp("19.893899204244033%"),
    minWidth: wp("19.893899204244033%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.681697612732094%"),
    top: hp("0%")
  },
  View_0_1029: {
    width: wp("19.893899204244033%"),
    minWidth: wp("19.893899204244033%"),
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
  View_0_1030: {
    width: wp("6.36604774535809%"),
    minWidth: wp("6.36604774535809%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.631299734748005%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_0_1032: {
    width: wp("6.27577045551978%"),
    minWidth: wp("6.27577045551978%"),
    height: hp("2.8109873578848084%"),
    minHeight: hp("2.8109873578848084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1034: {
    width: wp("19.893899204244033%"),
    minWidth: wp("19.893899204244033%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.787798408488065%"),
    top: hp("0%")
  },
  View_0_1035: {
    width: wp("19.893899204244033%"),
    minWidth: wp("19.893899204244033%"),
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
  View_0_1036: {
    width: wp("6.36604774535809%"),
    minWidth: wp("6.36604774535809%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.697612732095493%"),
    top: hp("1.4002732240437155%")
  },
  ImageBackground_0_1038: {
    width: wp("6.23342175066313%"),
    minWidth: wp("6.23342175066313%"),
    height: hp("3.210382513661202%"),
    minHeight: hp("3.210382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1041: {
    width: wp("19.893899204244033%"),
    minWidth: wp("19.893899204244033%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.893899204244033%"),
    top: hp("0%")
  },
  View_0_1042: {
    width: wp("19.893899204244033%"),
    minWidth: wp("19.893899204244033%"),
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
  View_0_1043: {
    width: wp("6.36604774535809%"),
    minWidth: wp("6.36604774535809%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.697612732095493%"),
    top: hp("1.4002732240437155%")
  },
  ImageBackground_0_1045: {
    width: wp("6.197336940613603%"),
    minWidth: wp("6.197336940613603%"),
    height: hp("3.1917978505619233%"),
    minHeight: hp("3.1917978505619233%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1047: {
    width: wp("19.893899204244033%"),
    minWidth: wp("19.893899204244033%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1048: {
    width: wp("19.893899204244033%"),
    minWidth: wp("19.893899204244033%"),
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
  View_0_1049: {
    width: wp("5.835543766578249%"),
    minWidth: wp("5.835543766578249%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.8965517241379315%"),
    top: hp("1.4506355660860635%")
  },
  ImageBackground_0_1051: {
    width: wp("5.835543766578249%"),
    minWidth: wp("5.835543766578249%"),
    height: hp("3.194169789715543%"),
    minHeight: hp("3.194169789715543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1053: {
    width: wp("99.46949602122017%"),
    minWidth: wp("99.46949602122017%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4641909814323607%"),
    top: hp("106.9672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1054: {
    width: wp("99.46949602122017%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_0_1055: {
    width: wp("35.54376657824933%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.09549071618037%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_15031: {
    width: wp("99.46949602122017%"),
    minWidth: wp("99.46949602122017%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4641909814323607%"),
    top: hp("0.6830601092896175%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_15032: {
    width: wp("99.46949602122017%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_0_15033: {
    width: wp("6.45306028168777%"),
    minWidth: wp("6.45306028168777%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.94782837885442%"),
    top: hp("2.3679305946892075%")
  },
  View_0_15034: {
    width: wp("5.835543766578249%"),
    minWidth: wp("5.835543766578249%"),
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
  ImageBackground_0_15035: {
    width: wp("0.35226471544260685%"),
    minWidth: wp("0.35226471544260685%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.100795755968193%"),
    top: hp("0.5009051880549862%")
  },
  View_0_15036: {
    width: wp("4.774535809018567%"),
    minWidth: wp("4.774535809018567%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.530503978779862%"),
    top: hp("0.27322404371584685%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_0_15037: {
    width: wp("4.067188232583772%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.55437665782492%")
  },
  ImageBackground_0_15041: {
    width: wp("4.509283819628647%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.4134901703381146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.71883289124668%")
  },
  View_0_15046: {
    width: wp("14.323607427055704%"),
    minWidth: wp("14.323607427055704%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.570291777188329%"),
    top: hp("1.9125683060109289%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_15047: {
    flexGrow: 1,
    width: wp("14.323607427055704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_15047: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_2: { height: 822 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
