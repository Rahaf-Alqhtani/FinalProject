﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PositiveQuote.Data;

namespace PositiveQuote.Migrations
{
    [DbContext(typeof(PositiveQuoteAppDBContext))]
    [Migration("20210622203013_tableupdate")]
    partial class tableupdate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.7")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("PositiveQuote.Model.Quote", b =>
                {
                    b.Property<int>("Quote_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Quote_Content")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Speaker_ID")
                        .HasColumnType("int");

                    b.Property<int?>("Speaker_ID1")
                        .HasColumnType("int");

                    b.HasKey("Quote_ID");

                    b.HasIndex("Speaker_ID1");

                    b.ToTable("Quotes");
                });

            modelBuilder.Entity("PositiveQuote.Model.Speaker", b =>
                {
                    b.Property<int>("Speaker_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Speaker_Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Speaker_ID");

                    b.ToTable("Speakers");
                });

            modelBuilder.Entity("PositiveQuote.Model.Quote", b =>
                {
                    b.HasOne("PositiveQuote.Model.Speaker", "Speaker")
                        .WithMany("Quote")
                        .HasForeignKey("Speaker_ID1");

                    b.Navigation("Speaker");
                });

            modelBuilder.Entity("PositiveQuote.Model.Speaker", b =>
                {
                    b.Navigation("Quote");
                });
#pragma warning restore 612, 618
        }
    }
}
