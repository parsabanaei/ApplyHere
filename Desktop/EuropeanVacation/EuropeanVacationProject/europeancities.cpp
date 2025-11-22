#include "europeancities.h"
#include "ui_europeancities.h"
#include "dbhandler.h"

#include <QListView>
#include <QTableView>
#include <QTreeView>

void showReport(Ui::EuropeanCities* ui);
void comboBoxLoad(Ui::EuropeanCities* ui);

EuropeanCities::EuropeanCities(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::EuropeanCities)
{
    ui->setupUi(this);

    showReport(ui);
    comboBoxLoad(ui);
}

EuropeanCities::~EuropeanCities()
{
    delete ui;
}


void showReport(Ui::EuropeanCities* ui)
{
    QMessageBox msgBox;


    DbHandler dbHandler(DATABASE_PATH,DATABASE_CONNECTION_NAME);
    if(dbHandler.open())
    {
        QSqlQueryModel* queryModel= new QSqlQueryModel;

        queryModel->setQuery("SELECT Starting_City_Name, Ending_City_Name, Kilometers FROM Distances WHERE Starting_City_Name = 'Rome'");
        queryModel->setHeaderData(0, Qt::Horizontal, QObject::tr("Starting City Name"));
        queryModel->setHeaderData(1, Qt::Horizontal, QObject::tr("Ending City Name"));
        queryModel->setHeaderData(2, Qt::Horizontal, QObject::tr("Kilometers"));
        ui->tableView->setModel(queryModel);
        ui->tableView->show();
        //ui->tableView->setEditTriggers(QAbstractItemView::NoEditTriggers);


        dbHandler.close();
    }
    else
    {
        msgBox.setText(FAILED_MESSAGE_DATABASE_OPENING);
        msgBox.exec();
    }

}


void comboBoxLoad(Ui::EuropeanCities* ui)
{
    QMessageBox msgBox;

    DbHandler dbHandler(DATABASE_PATH,DATABASE_CONNECTION_NAME);
    if(dbHandler.open())
    {

        QString querystring = "SELECT Name FROM Cities";

        QSqlQuery modelquery;

        modelquery.exec(querystring);
        QSqlQueryModel *model = new QSqlQueryModel;
        model->setQuery(modelquery);
        //model->setHeaderData(0, Qt::Horizontal, "ID");
        model->setHeaderData(0, Qt::Horizontal, "City Name");


        ui->comboBox->setModel(model);

        dbHandler.close();
    }
    else
    {
        msgBox.setText(FAILED_MESSAGE_DATABASE_OPENING);
        msgBox.exec();
    }
}

void EuropeanCities::on_pushButton_clicked()
{
    QMessageBox msgBox;

    DbHandler dbHandler(DATABASE_PATH,DATABASE_CONNECTION_NAME);
    if(dbHandler.open())
    {
        QSqlQueryModel* queryModel= new QSqlQueryModel;

       QString city= ui->comboBox->currentText();

        queryModel->setQuery("SELECT Starting_City_Name, Ending_City_Name, Kilometers FROM Distances WHERE Starting_City_Name LIKE '%"+city+"%'");
        queryModel->setHeaderData(0, Qt::Horizontal, QObject::tr("Starting City Name"));
        queryModel->setHeaderData(1, Qt::Horizontal, QObject::tr("Ending City Name"));
        queryModel->setHeaderData(2, Qt::Horizontal, QObject::tr("Kilometers"));
        ui->tableView->setModel(queryModel);
        ui->tableView->show();
        //ui->tableView->setEditTriggers(QAbstractItemView::NoEditTriggers);


        dbHandler.close();
    }
    else
    {
        msgBox.setText(FAILED_MESSAGE_DATABASE_OPENING);
        msgBox.exec();
    }
}

