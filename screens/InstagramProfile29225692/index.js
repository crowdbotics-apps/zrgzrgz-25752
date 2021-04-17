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
      <View style={styles.View_0_2663}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85bf/cd18/030766c375f193793c20c2e2fd96cd74"
          }}
          style={styles.ImageBackground_0_2664}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cdf/bc62/ab05b4fc5a364a0da42c1346f535cd9b"
          }}
          style={styles.ImageBackground_0_2665}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3194/61ec/55721c5607f695cd5ebeb4527d240606"
          }}
          style={styles.ImageBackground_0_2666}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7513/644e/30de7bf529b5a67b113da0ae468fae76"
          }}
          style={styles.ImageBackground_0_2667}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c817/fee7/dd92c3206603874e1b46de3afe6766de"
          }}
          style={styles.ImageBackground_0_2668}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a1b/5f40/555805d67cd8badd344d4f72cd3f83e8"
          }}
          style={styles.ImageBackground_0_2669}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df6c/6372/f4442238d4fa2c6f6d61457c0fa3376c"
          }}
          style={styles.ImageBackground_0_2670}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab8/d6c1/02654a961fa746f672403440656c549c"
          }}
          style={styles.ImageBackground_0_2671}
        />
        <View style={styles.View_0_2672}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72d/7638/dd8786ce38c67c202d0072c21072a125"
            }}
            style={styles.ImageBackground_0_2673}
          />
          <View style={styles.View_0_2674}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b036/2b7e/6ec929011ffa09a48af17f097a47b0ad"
              }}
              style={styles.ImageBackground_0_2676}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_2680}>
        <View style={styles.View_0_2681} />
        <View style={styles.View_0_2682}>
          <View style={styles.View_0_2683} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f4b/c46b/4814fdbe65b34504057c9ed601be4f85"
            }}
            style={styles.ImageBackground_0_2684}
          />
          <View style={styles.View_0_2685}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/567c/a19d/ed630f20bc03af4af77fe09bf83b523c"
              }}
              style={styles.ImageBackground_0_2687}
            />
          </View>
        </View>
        <View style={styles.View_0_2697}>
          <View style={styles.View_0_2698} />
          <View style={styles.View_0_2699}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52be/0c8a/2da90826a219d991eea39550f5d3757e"
              }}
              style={styles.ImageBackground_0_2701}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_2706}>
        <View style={styles.View_0_2707} />
        <View style={styles.View_0_2708}>
          <View style={styles.View_0_2709} />
          <View style={styles.View_0_2710}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a0e/d161/2fb87045074a15835f553e1b5854137d"
              }}
              style={styles.ImageBackground_0_2712}
            />
          </View>
          <View style={styles.View_0_2715}>
            <Text style={styles.Text_0_2715}>jacob_w</Text>
          </View>
          <View style={styles.View_0_2716}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b72/d9a5/b98445a3af1f7b3254c1782349459776"
              }}
              style={styles.ImageBackground_0_2718}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ac3/ee24/f00c63909096ba9e36c9ab709bab947d"
            }}
            style={styles.ImageBackground_0_2720}
          />
        </View>
        <View style={styles.View_0_2722}>
          <View style={styles.View_0_2723}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/384d/6c18/dc4a721a7045bd84ddcbfc31a4c765f4"
              }}
              style={styles.ImageBackground_0_2724}
            />
            <View style={styles.View_0_2725}>
              <Text style={styles.Text_0_2725}>New</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b539/0771/e2b47e8965e7a798915d71a1fb7eea58"
              }}
              style={styles.ImageBackground_0_2726}
            />
          </View>
          <View style={styles.View_0_2728}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/384d/6c18/dc4a721a7045bd84ddcbfc31a4c765f4"
              }}
              style={styles.ImageBackground_0_2729}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53c6/ce93/5020a7ad69fcefa70b37800fe7081091"
              }}
              style={styles.ImageBackground_0_2730}
            />
            <View style={styles.View_0_2731}>
              <Text style={styles.Text_0_2731}>Friends</Text>
            </View>
          </View>
          <View style={styles.View_0_2732}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/384d/6c18/dc4a721a7045bd84ddcbfc31a4c765f4"
              }}
              style={styles.ImageBackground_0_2733}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02b2/e991/ec75e298e96d03313b76d4b425ba10cb"
              }}
              style={styles.ImageBackground_0_2734}
            />
            <View style={styles.View_0_2735}>
              <Text style={styles.Text_0_2735}>Sport </Text>
            </View>
          </View>
          <View style={styles.View_0_2736}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/384d/6c18/dc4a721a7045bd84ddcbfc31a4c765f4"
              }}
              style={styles.ImageBackground_0_2737}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11e4/cbf5/f7bb993343c586b1e3bdbe5769fe1cd2"
              }}
              style={styles.ImageBackground_0_2738}
            />
            <View style={styles.View_0_2739}>
              <Text style={styles.Text_0_2739}>Design</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_2740}>
          <View style={styles.View_0_2741} />
          <View style={styles.View_0_2742}>
            <Text style={styles.Text_0_2742}>Edit Profile</Text>
          </View>
        </View>
        <View style={styles.View_0_2743}>
          <View style={styles.View_0_2744}>
            <View style={styles.View_0_2745}>
              <Text style={styles.Text_0_2745}>Jacob West</Text>
            </View>
            <View style={styles.View_0_2746}>
              <Text style={styles.Text_0_2746}>
                Digital goodies designer @pixsellz Everything is designed.
              </Text>
            </View>
          </View>
          <View style={styles.View_0_2747}>
            <View style={styles.View_0_2748}>
              <Text style={styles.Text_0_2748}>Posts</Text>
            </View>
            <View style={styles.View_0_2749}>
              <Text style={styles.Text_0_2749}>Followers</Text>
            </View>
            <View style={styles.View_0_2750}>
              <Text style={styles.Text_0_2750}>Following</Text>
            </View>
            <View style={styles.View_0_2751}>
              <Text style={styles.Text_0_2751}>54</Text>
            </View>
            <View style={styles.View_0_2752}>
              <Text style={styles.Text_0_2752}>834</Text>
            </View>
            <View style={styles.View_0_2753}>
              <Text style={styles.Text_0_2753}>162</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5a6/c548/5513c6df489fc2350f529fcb540c95d6"
            }}
            style={styles.ImageBackground_0_2754}
          />
        </View>
      </View>
      <View style={styles.View_0_2757}>
        <View style={styles.View_0_2758} />
        <View style={styles.View_0_2759}>
          <View style={styles.View_0_2760} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d84d/46cb/bb076f6922b392b4daf9d61854400790"
            }}
            style={styles.ImageBackground_0_2761}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b86/c50c/3a4a15684428ee89ea835642418e3b66"
            }}
            style={styles.ImageBackground_0_2762}
          />
        </View>
        <View style={styles.View_0_2763}>
          <View style={styles.View_0_2764} />
          <View style={styles.View_0_2765}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4771/b938/c477bdc477a9f9fa7ea020b3e3dcb6a1"
              }}
              style={styles.ImageBackground_0_2767}
            />
          </View>
        </View>
        <View style={styles.View_0_2769}>
          <View style={styles.View_0_2770} />
          <View style={styles.View_0_2771}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c385/39cc/7d83fa914c4f2ff8a33ddbd086e0949c"
              }}
              style={styles.ImageBackground_0_2773}
            />
          </View>
        </View>
        <View style={styles.View_0_2776}>
          <View style={styles.View_0_2777} />
          <View style={styles.View_0_2778}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0bf/cecc/baa43c127520302902563d18971d5622"
              }}
              style={styles.ImageBackground_0_2780}
            />
          </View>
        </View>
        <View style={styles.View_0_2782}>
          <View style={styles.View_0_2783} />
          <View style={styles.View_0_2784}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eec0/d6be/b193cb051e10fc4daf3b1f3277b051d7"
              }}
              style={styles.ImageBackground_0_2786}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_2788}>
        <View style={styles.View_0_2789} />
        <View style={styles.View_0_2790}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c4d/d8a4/5898ea6223f3866c96a0a2b0f8dbf697"
            }}
            style={styles.ImageBackground_0_2792}
          />
          <View style={styles.View_0_2795}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5e/65c1/5989f51caa4acec8db82e3c4db888257"
              }}
              style={styles.ImageBackground_0_2794}
            />
            <View style={styles.View_0_2796} />
          </View>
          <View style={styles.View_0_2797} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ed7/5ed8/6d52dd9ca7839e477e35f725cd76ef91"
          }}
          style={styles.ImageBackground_0_2799}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8993/e879/54bd9237f2d3127b556731ccdf8548cf"
          }}
          style={styles.ImageBackground_0_2803}
        />
        <View style={styles.View_0_2807}>
          <View style={styles.View_0_2808}>
            <Text style={styles.Text_0_2808}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_2809}>
        <View style={styles.View_0_2810} />
        <View style={styles.View_0_2811} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_2663: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("61.20218579234973%")
  },
  ImageBackground_0_2664: {
    width: wp("33.06666666666666%"),
    minWidth: wp("33.06666666666666%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.076502732240435%"),
    resizeMode: "cover"
  },
  ImageBackground_0_2665: {
    width: wp("33.06666666666666%"),
    minWidth: wp("33.06666666666666%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.15300546448086%"),
    resizeMode: "cover"
  },
  ImageBackground_0_2666: {
    width: wp("33.06666666666666%"),
    minWidth: wp("33.06666666666666%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("34.15300546448086%"),
    resizeMode: "cover"
  },
  ImageBackground_0_2667: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("34.15300546448086%"),
    resizeMode: "cover"
  },
  ImageBackground_0_2668: {
    width: wp("33.06666666666666%"),
    minWidth: wp("33.06666666666666%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_0_2669: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_0_2670: {
    width: wp("33.06666666666666%"),
    minWidth: wp("33.06666666666666%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_0_2671: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("17.076502732240435%"),
    resizeMode: "cover"
  },
  View_0_2672: {
    width: wp("33.06666666666666%"),
    minWidth: wp("33.06666666666666%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("17.076502732240435%")
  },
  ImageBackground_0_2673: {
    width: wp("33.06666666666666%"),
    minWidth: wp("33.06666666666666%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_0_2674: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.400000000000013%"),
    top: hp("1.2295081967213122%")
  },
  ImageBackground_0_2676: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_2680: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55.05464480874317%")
  },
  View_0_2681: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_0_2682: {
    width: wp("49.6%"),
    minWidth: wp("49.6%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_2683: {
    width: wp("49.6%"),
    minWidth: wp("49.6%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.00009999999747378752
  },
  ImageBackground_0_2684: {
    width: wp("49.333333333333336%"),
    minWidth: wp("49.333333333333336%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333333%"),
    top: hp("5.874316939890711%")
  },
  View_0_2685: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("1.5027322404371546%")
  },
  ImageBackground_0_2687: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3.0737704918032787%"),
    minHeight: hp("3.0737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_2697: {
    width: wp("49.6%"),
    minWidth: wp("49.6%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.4%"),
    top: hp("0%")
  },
  View_0_2698: {
    width: wp("49.6%"),
    minWidth: wp("49.6%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_2699: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333336%"),
    top: hp("1.4047924938097722%")
  },
  ImageBackground_0_2701: {
    width: wp("6.266666666666667%"),
    minWidth: wp("6.266666666666667%"),
    height: hp("3.240023024095212%"),
    minHeight: hp("3.240023024095212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_2706: {
    width: wp("100.26666666666667%"),
    minWidth: wp("100.26666666666667%"),
    height: hp("55.05464480874317%"),
    minHeight: hp("55.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2%"),
    top: hp("0%")
  },
  View_0_2707: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("55.05464480874317%"),
    minHeight: hp("55.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_0_2708: {
    width: wp("100.26666666666667%"),
    minWidth: wp("100.26666666666667%"),
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
  View_0_2709: {
    width: wp("100%"),
    height: hp("12.021857923497267%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_2710: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.80000000000001%"),
    top: hp("7.786885245901639%")
  },
  ImageBackground_0_2712: {
    width: wp("5.466666666666667%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333332575%")
  },
  View_0_2715: {
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("7.650273224043716%")
  },
  Text_0_2715: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.33000001311302185,
    textTransform: "none"
  },
  View_0_2716: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.06666666666667%"),
    top: hp("8.19672131147541%")
  },
  ImageBackground_0_2718: {
    width: wp("2.3333333333333335%"),
    height: hp("1.605191256830601%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2720: {
    width: wp("2.933333333333333%"),
    height: hp("0.9562841530054645%"),
    top: hp("8.627252630848702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.33333333333334%")
  },
  View_0_2722: {
    width: wp("82.66666666666667%"),
    minWidth: wp("82.66666666666667%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.933333333333334%"),
    top: hp("41.66666666666667%")
  },
  View_0_2723: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
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
  ImageBackground_0_2724: {
    width: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2725: {
    width: wp("6.933333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666665%"),
    top: hp("9.15300546448087%")
  },
  Text_0_2725: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  ImageBackground_0_2726: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("3.1420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%")
  },
  View_0_2728: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_2729: {
    width: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2730: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%")
  },
  View_0_2731: {
    width: wp("11.200000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.93333333333333%"),
    top: hp("9.15300546448087%")
  },
  Text_0_2731: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  View_0_2732: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.733333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_2733: {
    width: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2734: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%")
  },
  View_0_2735: {
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.133333333333333%"),
    top: hp("9.15300546448087%")
  },
  Text_0_2735: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  View_0_2736: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.60000000000001%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_2737: {
    width: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2738: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666487%")
  },
  View_0_2739: {
    width: wp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999886%"),
    top: hp("9.15300546448087%")
  },
  Text_0_2739: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  View_0_2740: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.466666666666667%"),
    top: hp("35.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_2741: {
    width: wp("91.46666666666667%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(60, 60, 67, 1)",
    borderWidth: 1
  },
  View_0_2742: {
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.53333333333333%"),
    top: hp("0.6830601092896202%")
  },
  Text_0_2742: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_0_2743: {
    width: wp("92.80000000000001%"),
    minWidth: wp("92.80000000000001%"),
    height: hp("21.44808743169399%"),
    minHeight: hp("21.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1333333333333333%"),
    top: hp("12.021857923497267%")
  },
  View_0_2744: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333335%"),
    top: hp("14.75409836065574%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_2745: {
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_2745: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2746: {
    width: wp("91.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.04918032786885%")
  },
  Text_0_2746: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2747: {
    width: wp("54.666666666666664%"),
    minWidth: wp("54.666666666666664%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("4.0983606557377055%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_2748: {
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.8688524590163915%")
  },
  Text_0_2748: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_0_2749: {
    width: wp("15.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.13333333333334%"),
    top: hp("2.8688524590163915%")
  },
  Text_0_2749: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_0_2750: {
    width: wp("15.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.20000000000001%"),
    top: hp("2.8688524590163915%")
  },
  Text_0_2750: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_0_2751: {
    width: wp("5.6000000000000005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%"),
    top: hp("0%")
  },
  Text_0_2751: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_0_2752: {
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.733333333333327%"),
    top: hp("0%")
  },
  Text_0_2752: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_0_2753: {
    width: wp("7.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.6%"),
    top: hp("0%")
  },
  Text_0_2753: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_0_2754: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_2757: {
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
  View_0_2758: {
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
  View_0_2759: {
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
  View_0_2760: {
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
  ImageBackground_0_2761: {
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
  ImageBackground_0_2762: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%"),
    top: hp("1.229508196721298%")
  },
  View_0_2763: {
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
  View_0_2764: {
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
  View_0_2765: {
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
  ImageBackground_0_2767: {
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
  View_0_2769: {
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
  View_0_2770: {
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
  View_0_2771: {
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
  ImageBackground_0_2773: {
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
  View_0_2776: {
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
  View_0_2777: {
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
  View_0_2778: {
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
  ImageBackground_0_2780: {
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
  View_0_2782: {
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
  View_0_2783: {
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
  View_0_2784: {
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
  ImageBackground_0_2786: {
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
  View_0_2788: {
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
  View_0_2789: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_0_2790: {
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
  ImageBackground_0_2792: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_2795: {
    width: wp("0.4%"),
    minWidth: wp("0.4%"),
    height: hp("0.529232572336666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%"),
    top: hp("0.4781420765027322%")
  },
  ImageBackground_0_2794: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6666666666666714%"),
    top: hp("-0.008604956454917989%")
  },
  View_0_2796: {
    width: wp("0.6666666666666667%"),
    minWidth: wp("0.6666666666666667%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6666666666666714%"),
    top: hp("-0.008604956454917989%"),
    backgroundColor: "rgba(62, 81, 85, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_2797: {
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
  ImageBackground_0_2799: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18502604166666%")
  },
  ImageBackground_0_2803: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413473494065915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31113281249999%")
  },
  View_0_2807: {
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
  View_0_2808: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_2808: {
    color: "rgba(23, 23, 23, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_0_2809: {
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
  View_0_2810: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_0_2811: {
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
