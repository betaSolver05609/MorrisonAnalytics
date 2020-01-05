# -*- coding: utf-8 -*-
"""
Created on Mon Jan  6 00:09:28 2020

@author: Dell inspiron
"""

import pandas as pd;
from flask import Flask, jsonify;

app=Flask(__name__)

df=pd.read_excel('BarcodeScannerExtract.xlsx')
xls=pd.ExcelFile('BarcodeScannerExtract.xlsx')
df1=pd.read_excel(xls, 'Dispose')

@app.route('/')
def pingResource():
    return jsonify('Ping Successfull.....')

@app.route('/mostUsedTerminal')
def mostUsedTerminal():
    p=df.groupby(['Terminal Name']).sum().reset_index('Terminal Name').drop(['S.No', 'Barcode', 'Store', 'Item Number'], axis=1)
    return p.to_json(orient='data')

@app.route('/terminalsAndRelativeQuantity')
def terminalsAndRelativeQuantity():
    p=df
    p=p.drop(['S.No','First Name',
              'Last Name',
              'Reason code','Date','Item Description', 'Store'], axis=1)
    return p.to_json(orient='values')

@app.route('/itemMostTransactedUnderCafeTerminal')
def itemMostTransactedUnderCafeTerminal():
    p=df[df['Terminal Name']=='TM-1014-Cafe']
    p=p.groupby(['Terminal Name', 'Item Number']).sum().drop(['S.No', 'Store', 'Barcode'], axis=1)
    p=p[p['Quantity']>=10]
    p=p[p['Quantity']>=p['Quantity'].mean()]
    p=p.reset_index()
    return p.to_json(orient='rows')
@app.route('/whichPersonDoesMostTransaction')
def whichPersonDoesMostTransaction():
    p=df.groupby(['First Name']).sum().reset_index('First Name').drop(['S.No', 'Barcode', 'Store', 'Item Number'], axis=1)
    p=p[p['Quantity']>100]
    return p.to_json(orient='values')

@app.route('/mostTransactionsOnBarcode')
def mostTransactionsOnBarcode():
    p=df.groupby(['Barcode']).sum().reset_index('Barcode').drop(['S.No', 'Store', 'Item Number'], axis=1)
    return p.to_json(orient='values')

@app.route('/volumeOfTransactionsAroundMean')
def volumeOfTransactionsAroundMean():
    p=df;
    p['Hour']=pd.DatetimeIndex(df['Date']).hour
    d=p.groupby(['Hour']).count().reset_index('Month').drop([
    'S.No',
    'Terminal Name',
    'Store',
    'First Name',
    'Last Name',
    'Barcode',
    'Quantity',
    'Reason code',
    'Date',
    'Item Number'], axis=1)
    d.columns= ['Hour', 'Number of Transactions']
    d['Mean']=d['Number of Transactions'].mean()
    return d.to_json(orient='values')
@app.route('/linearTrendInQuantityAndHour')
def linearTrendInQuantityAndHour():
    p=df
    p=p.drop(['S.No','First Name',
              'Last Name',
              'Reason code','Item Description', 'Store', 'Barcode'], axis=1)
    p['hour']=pd.DatetimeIndex(p['Date']).hour
    p=p.drop(['Terminal Name', 'Date'], axis=1)
    p=p.groupby(['hour']).sum().drop(['Item Number'], axis=1)
    p=p.reset_index()
    return p.to_json(orient='values')
@app.route('/volumeOfTransactionsSpread')    
def volumeOfTransactionsSpread():
    p=df;
    p['week']=pd.DatetimeIndex(df['Date']).weekofyear
    p['day']=pd.DatetimeIndex(df['Date']).dayofweek
    p['day']=p['day'].replace(0, 'Monday')
    p['day']=p['day'].replace(1, 'Tuesday')
    p['day']=p['day'].replace(2, 'Wednesday')
    p['day']=p['day'].replace(3, 'Thursday')
    p['day']=p['day'].replace(4, 'Friday')
    p['day']=p['day'].replace(5, 'Saturday')
    p['day']=p['day'].replace(6, 'Sunday')
    d=p.groupby(['week', 'day']).sum().reset_index()
    d=d.drop(['Item Number', 'Store', 'Hour', 'S.No', 'Barcode'], axis=1)
    return d.to_json(orient='values')
@app.route('/summaryScatterPlotData')
def summaryScatterPlotData():
    p=df
    p=p.drop(['S.No','First Name',
              'Last Name',
              'Reason code','Item Description', 'Store', 'Barcode'], axis=1)
    p['hour']=pd.DatetimeIndex(p['Date']).hour    
    return p.to_json(orient='values')
@app.route('/wastageReason')
def wastageReason():
    p=df1
    p=p.groupby(['Reason code']).count().drop(['S.No',
                'Terminal Name',
                'Store',
                'First Name',
                'Last Name',
                'Barcode',
                'Quantity',
                'Date',
                'Item Number'], axis=1)
    p=p.reset_index();
    return p.to_json(orient='values')
@app.route('/itemCharityAndWastage')
def itemCharityAndWastage():
    p=df1
    p=p.drop(['S.No',
              'Terminal Name',
              'Store',
              'First Name',
              'Last Name',
              'Barcode',
              'Quantity',
              'Date',
              'Item Description'
              ], axis=1)
    p['Item Number']=p['Item Number'].astype(str)
    return p.to_json(orient='values')
@app.route('/amountOfWastageByTerminal')
def amountOfWastageByTerminal():
    p=df1
    p=p.groupby(['Terminal Name']).sum().drop(['S.No', 'Store', 'Item Number'], axis=1)
    p=p.reset_index();
    return p.to_json(orient='values')

@app.route('/wastageOverHour')
def wastageOverHour():
    p=df1
    p['hour']=pd.DatetimeIndex(p['Date']).hour
    p=p.groupby(['Reason code', 'hour']).sum().drop(['S.No', 'Store', 'Item Number'], axis=1);
    p=p.reset_index();
    return p.to_json(orient='values')


if __name__== '__main__':
    app.run();
    
    

