/**
 * Created by avik on 31-03-2016.
 */
'use strict';

exports=module.exports=function (app, mongoose) {
    var dataEntryOperatorSchema= new mongoose.Schema({
        user: {
            id: { type: mongoose.Schema.Types.ObjectId, ref:'User'},
            name: {type:String, default:''}
           },
        company: {type:String, default:''},
        phone: {type:String, default:''}

    });

    dataEntryOperatorSchema.plugin(require('./plugins/pagedFind'));
    dataEntryOperatorSchema.index({user:1});
    dataEntryOperatorSchema.set('autoIndex', (app.get('env')==='development'));
    app.db.model('DataEntryOperator', dataEntryOperatorSchema);
};


