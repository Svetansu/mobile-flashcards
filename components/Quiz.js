import React,{ Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { white, orange, purple, red, lightPurp, blue, green, dark } from '../utils/colors';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, StyleSheet, KeyboardAvoidingView, TextInput, Animated } from 'react-native';
import ActionButton from './ActionButton';
import Info from './Info';


class Quiz extends Component {

  state = {
    questionNumber: 0,
    showQuestion: false,
    correctNum: 0,
    incorrectNum: 0,
    animation: new Animated.Value(0.5)
  }

  toggleShow = () => {
    this.setState((current) => ({
      showQuestion: !current.showQuestion
    }))
  }

  submitAnswer = (answer) => {

    this.handleAnimation()
    const deck = this.props.navigation.state.params.entryId;
    const { questionNumber } = this.state;
    const { decks } = this.props;
    if (answer==='true') {
      this.setState((prev) => ({
        correctNum: prev.correctNum+1
      }))
    } else {
      this.setState((prev) => ({
        incorrectNum: prev.incorrectNum+1
      }))
    }
    this.setState((prev) => ({
        questionNumber: prev.questionNumber+1,
        showQuestion: false
      }))
  }

  handleAnimation = () => {
    Animated.spring(this.state.animation, {
      toValue: 1.1,
      friction: 2,
      tension: 360,
      duration: 1000,
    }).start(() => {
      Animated.spring(this.state.animation, {
        toValue: 1,
        duration: 100
      }).start()
    })
  }

  replayQuiz = () => {
    this.setState({
      questionNumber: 0,
      showQuestion: false,
      correctNum: 0,
      incorrectNum: 0
    })
  }
  
  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back({ key: null }))
  }

  render() {
    const decks = this.props.decks;
    const deck = this.props.navigation.state.params.entryId;
    const questionNumber = this.state.questionNumber;
    const number = questionNumber+1;
    
    const animatedStyle = {
      transform: [
        { scale: this.state.animation }
      ]
    }


    if (questionNumber === decks[deck].questions.length) {
      return (
          <View style={styles.container}>
            <View style={styles.card}>
              
              <Animated.View style={animatedStyle}>
                <Text style={styles.mainText}>You got {this.state.correctNum} out of {decks[deck].questions.length}!</Text>
              </Animated.View>
               

               {this.state.correctNum >= this.state.incorrectNum ? <Text style={{fontSize: 90, color: white, margin: 30}}>:)</Text> : <Text style={{fontSize: 90, color: white, margin: 30}}>:(</Text>}
              
              <View>
                <ActionButton color={blue} styles={styles} text={'Return Home'} onPress={this.goBack} />
                <ActionButton color={green} styles={styles} text={'Retry'} onPress={this.replayQuiz} />
              </View>
              
            </View>
          </View>
        )
    }
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.subText}>{number} / {decks[deck].questions.length}</Text>

          {!this.state.showQuestion
            ? <Text style={styles.mainText}>{decks[deck].questions[questionNumber].question}</Text>
            : <View>
                  <Text style={styles.mainText}>{decks[deck].questions[questionNumber].answer}</Text>
                  <View  style={{justifyContent: 'center', alignItems: 'center', margin: 20}}>
                    <ActionButton color={green} styles={styles} text={'I was right'} onPress={() => this.submitAnswer('true')} />
                    <ActionButton color={red} styles={styles} text={'I was wrong'} onPress={() => this.submitAnswer('false')}/>
                  </View> 
              </View>
              }
          
          {!this.state.showQuestion
            ? <Info text={'Show Answer'} onPress={this.toggleShow} ></Info>
            : <Info text={'Show Question'} onPress={this.toggleShow} ></Info>}
          
          
          
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: white,
    padding: 15
  },
  iosBtn: {
    padding: 6,
    borderRadius: 7,
    height: 45,
    margin: 10,
    width: 170
  },
  card: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: dark,
    margin: 8,
    height: 200,
    borderRadius: 20,
    shadowColor: 'rgba(0,0,0,0.34)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  mainText: {
    fontSize: 35,
    color: white,
    marginTop: 40,
    textAlign: 'center'
  },
  subText: {
    fontSize: 15,
    color: white,
  }
});

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Quiz);