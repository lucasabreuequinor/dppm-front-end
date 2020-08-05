import React from 'react'
import { Page, Text, View, Image, Document, StyleSheet, PDFViewer, Font, pdf } from '@react-pdf/renderer';


Font.register({ family: 'Montserrat', fonts: [
  { src: "https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459Wlhzg.ttf",
    fontWeight: 'normal',
  },
  { src: "https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_dJE3gnD-w.ttf",
    fontWeight: 'bold',
  }
 ]});
 

const styles = StyleSheet.create({
  pageOne: {
   
  },
 
  container:{
    fontFamily:'Montserrat',
    display:'flex',
    flexDirection:'column',
    justifyContent: 'space-between',
    height:'100%',
    fontSize:'13',
    color: '#2b2b2b',
    paddingTop:'25',
    paddingBottom:'25',
    paddingLeft:'40',
    paddingRight:'40',
  },
 
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
	  alignItems: 'center',
    height:'8%',
    backgroundColor:'tomato'
  },
 
  headerProjectName:{
    fontSize: '28',
    fontWeight:'bold',
    flexBasis: '80%',
    textOverflow:'hidden',
    backgroundColor:'gray'
  },
 
  headerLogoEquinor: {
    width: '100',
    height:'auto',
    backgroundColor:'gray'
  },
 
  sectionOne: {
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    backgroundColor:'green',
    height:'8.5%',

  },
 
  sectionOneLeft: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexBasis: '25%',
    backgroundColor:'purple',
  
  },
 
  sectionOneLeftTop: {

  },

  sectionOneLeftTopProjectLeaderLabel: {
    fontSize: '14'
  },

  sectionOneLeftTopProjectLeader: {
    fontSize:'15',
    fontWeight: 'bold',
    maxLines: '1',
    textOverflow: 'ellipsis'
  },
 
  sectionOneLeftBottom: {
   
  },

  sectionOneLeftBottomDecisionGateLabel:{
    fontSize: '14'
  },

  sectionOneLeftBottomDecisionGate:{
    fontSize: '15',
    fontWeight: 'bold',
    maxLines: '1',
    textOverflow: 'ellipsis'
  },
 
  sectionOneRight: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor:'yellow',
    flexBasis: '67%'    
  },

  sectionOneRightSolutionOverviewLabel: {
    fontSize: '14'
  },

  sectionOneRightSolutionOverview: {
    fontSize: '12',
    maxLines: '5',
    textOverflow: 'ellipsis'
  },
   
  sectionTwo: {
    display: 'flex',
    flexDirection: 'column',
    height:'24.5%',
    backgroundColor:'#87dced'

  },

  sectionTwoTopChangeStoryLabel:{
    fontSize: '14'
  },
   
  sectionTwoBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: '1',   
    backgroundColor: '#dba6f5'
  },
 
  sectionTwoBottomLeft: {
    flexBasis: '30.3%',
    backgroundColor: '#f5a6d3'
  },

  sectionTwoBottomLeftFromLabel: {
    fontSize: '14',
    backgroundColor: '#4333f2'
  },

  sectionTwoBottomLeftFrom: {
    fontSize: '12',
    maxLines: '16',
    textOverflow: 'ellipsis'
  },
 
  sectionTwoBottomMiddle: {
    flexBasis: '30.3%',
    backgroundColor: '#c8f5a6'  
  },

  sectionTwoBottomMiddleByLabel: {
    fontSize: '14',
    backgroundColor: '#d60694'
  },

  sectionTwoBottomMiddleBy: {
    fontSize: '12',
    maxLines: '16',
    textOverflow: 'ellipsis'
  },
 
  sectionTwoBottomRight: {
    flexBasis: '30.3%',
    backgroundColor: '#00ff9d'
  },

  sectionTwoBottomRightToLabel: {
    fontSize: '14',
    backgroundColor: '#ff4800'   
  },
 
  sectionTwoBottomRightTo: {
    fontSize: '12',
    maxLines: '16',
    textOverflow: 'ellipsis'
  },

  sectionThree: {
    display: 'flex',
    flexDirection: 'column',
    height:'24.5%',
    backgroundColor:'gray'
  },

  sectionThreeTopBusinessCaseLabel: {
    fontSize: '14',
  },
 
  sectionThreeBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: '1',
    backgroundColor: '#02db88',

  },
 
  sectionThreeBottomLeft: {
    flexBasis: '30.3%',
    backgroundColor: '#cfff6e'
   
  },

  sectionThreeBottomLeftKeyAssumptionsLabel:{
    fontSize: '14',
    backgroundColor: '#ff6e6e'
  },

  sectionThreeBottomLeftKeyAssumptions:{
    fontSize: '12',
    maxLines: '16',
    textOverflow: 'ellipsis'
  },
 
  sectionThreeBottomRight: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '65.5%',
    backgroundColor: '#db026b'  
  },

  sectionThreeBottomRightCashflowImpactLabel:{
    fontSize: '14',
    backgroundColor: '#8368fc',
    paddingBottom:'10'
  },

  sectionThreeBottomRightCashflowImpactGraphic: {
    alignSelf: 'center',
    width: '300',
    height:'200',

  },
   
  sectionFour: {
    height:'24.5%',
    backgroundColor:'orange'
  },
 
});


// MARCACOES DE LETRA W INDICAM POSTERIORMENT QUANTOS CARACTERES EU PRECISO

const doc = (
  <Document>
    <Page size="A3" style={styles.pageOne} ruler verticalRulerSteps={50} horizontalRulerSteps="10%">

      <View style={styles.container}>
         
          <View style={styles.header}>
            {/* MAXIMO LETRAS: 12 W's */}
			      <Text style={styles.headerProjectName}>Project Name</Text>
            <Image
              src="https://source.unsplash.com/random/200"
              style={ styles.headerLogoEquinor }
              >
            </Image>
          </View>

          <View style={styles.sectionOne}>
		        <View style={styles.sectionOneLeft}>
            
              <View style={styles.sectionOneLeftTop}>
                <Text style={styles.sectionOneLeftTopProjectLeaderLabel}>Project leader:</Text>
                {/* MAXIMO LETRAS: 7 W's */}
                <Text style={styles.sectionOneLeftTopProjectLeader}>Anderson Lima Bezerra da Silva</Text>
              </View>
             
              <View style={styles.sectionOneLeftBottom}>
                <Text style={styles.sectionOneLeftBottomDecisionGateLabel}>Decision Gate</Text>
                {/* MAXIMO LETRAS: SAFE */}
                <Text style={styles.sectionOneLeftBottomDecisionGate}>DG4</Text>
              </View>
             
            </View>
           
            <View style={styles.sectionOneRight}>
              <Text style={styles.sectionOneRightSolutionOverviewLabel}>Solution Overview</Text>
              <Text style={styles.sectionOneRightSolutionOverview}>
              Os CI têm permitido processadores cada vez mais complexos para serem concebidos e 
              fabricados em tamanhos da ordem de nanômetros. Tanto a miniaturização como a padronização dos processadores têm aumentado a presença destes dispositivos 
              digitais na vida moderna, muito além da aplicação limitada dedicada a computadores. 
              Os microprocessadores modernos aparecemem tudo, desde automóveis até celulares e brinquedos para crianças.
              Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
              digitais na vida moderna, muito além da aplicação limitada dedicada a computadores. 
              Os microprocessadores modernos aparecemem tudo, desde automóveis até celulares e brinquedos para crianças.
              Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
              </Text>
            </View>
           
          </View>
          <View style={styles.sectionTwo}>
            <Text style={styles.sectionTwoTopChangeStoryLabel}>Change Story</Text>
            <View style={styles.sectionTwoBottom}>

              <View style={styles.sectionTwoBottomLeft}>
                <Text style={styles.sectionTwoBottomLeftFromLabel}>From:</Text>
                <Text style={styles.sectionTwoBottomLeftFrom}>
                  Os CI têm permitido processadores cada vez mais complexos para serem concebidos e 
                  fabricados em tamanhos da ordem de nanômetros. Tanto a miniaturização como a padronização dos processadores têm aumentado a presença destes dispositivos 
                  digitais na vida moderna, muito além da aplicação limitada dedicada a computadores. 
                  Os microprocessadores modernos aparecemem tudo, desde automóveis até celulares e brinquedos para crianças.
                  Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
                  digitais na vida moderna, muito além da aplicação limitada dedicada a computadores. 
                  Os microprocessadores modernos aparecemem tudo, desde automóveis até celulares e brinquedos para crianças.
                  Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
                </Text>
              </View>
             
              <View style={styles.sectionTwoBottomMiddle}>
                <Text style={styles.sectionTwoBottomMiddleByLabel}>By:</Text>
                <Text style={styles.sectionTwoBottomMiddleBy}>
                  Os CI têm permitido processadores cada vez mais complexos para serem concebidos e 
                  fabricados em tamanhos da ordem de nanômetros. Tanto a miniaturização como a padronização dos processadores têm aumentado a presença destes dispositivos 
                  digitais na vida moderna, muito além da aplicação limitada dedicada a computadores. 
                  Os microprocessadores modernos aparecemem tudo, desde automóveis até celulares e brinquedos para crianças.
                  Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
                  digitais na vida moderna, muito além da aplicação limitada dedicada a computadores. 
                  Os microprocessadores modernos aparecemem tudo, desde automóveis até celulares e brinquedos para crianças.
                  Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
                </Text>
              </View>
             
              <View style={styles.sectionTwoBottomRight}>
                <Text style={styles.sectionTwoBottomRightToLabel}>To:</Text>
                <Text style={styles.sectionTwoBottomRightTo}>
                  Os CI têm permitido processadores cada vez mais complexos para serem concebidos e 
                  fabricados em tamanhos da ordem de nanômetros. Tanto a miniaturização como a padronização dos processadores têm aumentado a presença destes dispositivos 
                  digitais na vida moderna, muito além da aplicação limitada dedicada a computadores. 
                  Os microprocessadores modernos aparecemem tudo, desde automóveis até celulares e brinquedos para crianças.
                  Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
                  digitais na vida moderna, muito além da aplicação limitada dedicada a computadores. 
                  Os microprocessadores modernos aparecemem tudo, desde automóveis até celulares e brinquedos para crianças.
                  Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
                </Text>
              </View>
             
            </View>
          </View>

          <View style={styles.sectionThree}>

			      <Text style={styles.sectionThreeTopBusinessCaseLabel}>Business Case</Text>
            <View style={styles.sectionThreeBottom}>
             
              <View style={styles.sectionThreeBottomLeft}>
              <Text style={styles.sectionThreeBottomLeftKeyAssumptionsLabel}>Key Assumptions</Text>
                <Text style={styles.sectionThreeBottomLeftKeyAssumptions}>
                  Os CI têm permitido processadores cada vez mais complexos para serem concebidos e 
                  fabricados em tamanhos da ordem de nanômetros. Tanto a miniaturização como a padronização dos processadores têm aumentado a presença destes dispositivos 
                  digitais na vida moderna, muito além da aplicação limitada dedicada a computadores. 
                  Os microprocessadores modernos aparecemem tudo, desde automóveis até celulares e brinquedos para crianças.
                  Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
                  digitais na vida moderna, muito além da aplicação limitada dedicada a computadores. 
                  Os microprocessadores modernos aparecemem tudo, desde automóveis até celulares e brinquedos para crianças.
                  Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
                </Text>
              </View>
             
              <View style={styles.sectionThreeBottomRight}>
                <Text style={styles.sectionThreeBottomRightCashflowImpactLabel}>
                  Cashflow Impact in MUSD, before tax; Equinor share
                </Text>
                <Image
                  style={styles.sectionThreeBottomRightCashflowImpactGraphic}
                  src={window.best_url}
                  >
                </Image>
              </View>
            </View>
          </View>

          <View style={styles.sectionFour}>
              <Text>alalal</Text>
          </View>
         
      </View>

    </Page>
  </Document>
);

const PDFA3 = pdf(doc).toBlob()

export default PDFA3
