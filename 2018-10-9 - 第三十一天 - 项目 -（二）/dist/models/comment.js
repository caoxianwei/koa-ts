'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('comment', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        userId: {
            type: DataTypes.INTEGER,
            field: 'user_id',
            allowNull: false,
            defaultValue: 0,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        cookbookId: {
            type: DataTypes.INTEGER,
            field: 'cookbook_id',
            allowNull: false,
            defaultValue: 0,
            references: {
                model: 'category',
                key: 'id'
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        content: {
            type: DataTypes.STRING(1000),
            allowNull: false,
            defaultValue: ''
        },
        createdIpAt: {
            type: DataTypes.CHAR(15),
            allowNull: false,
            field: 'created_ip_at',
            defaultValue: ''
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'created_at'
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'updated_at'
        }
    }, {
        tableName: 'comment',
        charset: 'utf8mb4',
        collate: 'utf8mb4_bin',
        indexes: [
            {}
        ]
    });
    Comment.associate = function (models) {
        this.belongsTo(models['user'], {
            foreignKey: 'userId'
        });
        this.belongsTo(models['cookbook'], {
            foreignKey: 'cookbookId'
        });
    };
    return Comment;
};
//# sourceMappingURL=comment.js.map